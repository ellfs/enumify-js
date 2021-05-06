class Enum {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }

  get value() {
    return this.order;
  }

  get toString() {
    return this.name;
  }

  get valueOf() {
    return this.name;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
    case 'string':
      return this.name;
    case 'number':
      return this.value;
    case 'default':
    default:
      return this.value;
    }
  }
}

class Enums {
  constructor(members) {
    for (const [index, member] of members.entries()) {
      Object.defineProperty(this, member, {
        value: new Enum(member, index + 1),
        enumerable: true,
        writable: false,
        configurable: false,
      });
    }
  }

  *[Symbol.iterator]() {
    for (const value of Object.values(this)) {
      yield value;
    }
  }
}

const enumify = (...members) => {
  if (!members.every((member) => typeof member === 'string')) {
    throw new Error('enumify: only string is allowed as input parameters');
  }

  return Object.seal(new Enums(members));
};

module.exports = {
  enumify,
};

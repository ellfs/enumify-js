const _ = require('lodash');

const disallow_undefined_properties = (object) => {
  const handler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      throw new Error(`Property '${property}' is not defined`);
    },
  };
  return new Proxy(object, handler);
}


class Enum {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }

  get value() {
    return this.order;
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }

  valueOf() {
    return this.name;
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
    case 'number':
      return this.value;
    case 'string':
    case 'default':
    default:
      return this.name;
    }
  }
}

class Enums {
  constructor(members) {
    const define_property = (member, order) => {
      Object.defineProperty(this, member, {
        value: new Enum(member, order),
        enumerable: true,
        writable: false,
        configurable: false,
      });
    };

    for (const [member, order] of _.entries(members)) {
      define_property(member, order);
    }
  }

  *[Symbol.iterator]() {
    for (const value of Object.values(this)) {
      yield value;
    }
  }
}

const ordinal_number = (index) => index;
const natural_number = (index) => index + 1;
const power_of_2 = (index) => 1 << index;

const enumify = (members, {
  ordering = natural_number,
} = {}) => {
  /* eslint-disable no-param-reassign */
  if (!_.isObject(members)) {
    throw new TypeError('enumify(members): members has to either be an object of orders or an array of strings');
  }

  if (_.isArray(members)) {
    if (!_.every(members, _.isString)) {
      throw new TypeError('enumify: only string is allowed as input parameters given an array');
    }

    if (!_.isFunction(ordering)) {
      throw new TypeError('ordering has to be callable');
    }

    members = _.fromPairs([...members.entries()].map(([index, member]) => (
      [member, ordering(index)]
    )));
  }

  if (!_.every(_.values(members), _.isInteger)) {
    throw new TypeError(`enumify: enum orders has to be integer, given: ${JSON.stringify(members)}`);
  }

  const enums = Object.freeze(new Enums(members));
  return disallow_undefined_properties(enums);
};

module.exports = {
  enumify,
  ordinal_number,
  natural_number,
  power_of_2,
};

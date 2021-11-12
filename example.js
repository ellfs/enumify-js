const assert = require('assert');

const { enumify, power_of_2 } = require('./lib');

console.log('Animal_param');
try {
  const Animal_param = enumify(
    'CAT',
    'DOG',
  );
} catch (e) {
  if (!e instanceof TypeError) {
    throw e;
  }
  console.log('Successfully failed: old way: enumify(...members) deprecated');
}

console.log('Animal_array');
const Animal_array = enumify([
  'CAT',
  'DOG',
  'MONKEY',
]);

try {
  Animal_array._CAT;
  console.error('incorrect');
} catch (e) {
  console.log('correct');
}

console.log('toJSON()');
const expected = JSON.stringify({ string: 'CAT' });
const actual = JSON.stringify({ string: Animal_array.CAT });
console.log({ expected, actual });
assert.deepEqual(expected, actual);


console.log('Animal_object');
const Animal_object = enumify([
  'CAT',
  'DOG',
  'MONKEY',
], {
  ordering: power_of_2,
});

console.log({
  // Animal_param,
  Animal_array,
  Animal_object,
  or: Animal_object.CAT | Animal_object.DOG | Animal_object.MONKEY,
});

const Interval = enumify({
  daily: {
    hour: 0,
    minute: 0,
  },
  hourly: {
    minute: 0,
  },
  minutely: {

  },
});

console.log({ Interval });


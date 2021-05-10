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
});

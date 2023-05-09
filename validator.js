var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')); //=> true
console.log(validator.isISBN('978-3-16-148410-0')); //=> true
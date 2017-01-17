var convert = require('./converter');
var random = require('./random');

exports.randomizer = function () {
  // return "test2";
  return convert(random(100, 1000000));
};

exports.printer = function () {
  return "Account Balance: \n";
};

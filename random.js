var randomNumber = function(min, max) {
  return String(Math.random() * (max - min) + min);
  // return 10;

}

module.exports = randomNumber;

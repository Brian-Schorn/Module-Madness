var convert = function(amount) {
  // var string = Number(amount).toFixed(2);
  // var string = Number(amount).toFixed(2).replace(/(?!^)(\d\d\d)(?=(\d\d\d)*\.)/g, ',$1');
  return (('$ ' + Number(amount).toFixed(2).replace(/(?!^)(\d\d\d)(?=(\d\d\d)*\.)/g, ',$1') + "\n"));

}

module.exports = convert;

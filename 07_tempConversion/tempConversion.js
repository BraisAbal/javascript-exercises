const convertToCelsius = function(num) {
  return Number(((num - 32) * 5 / 9).toFixed(1));
}

const convertToFahrenheit = function(num) {
  return Number(((num * 9 / 5) + 32).toFixed(1));
}



console.log(convertToCelsius(100));
console.log(convertToFahrenheit(20));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

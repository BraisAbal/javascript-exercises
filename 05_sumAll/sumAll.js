const sumAll = function(min, max) {
    //array destructuring, si la variable min supera a la variable max intercambiamos sus valores.
    if (min > max) [min, max] = [max, min];

   let suma = 0;
    for (let index = min; index<= max; index++){
    suma += index;
     }

   return suma;
};


// Do not edit below this line
module.exports = sumAll;

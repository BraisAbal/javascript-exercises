function leapYears(year) {
    if (year % 4 !== 0) {
        return false;  // The year is not a leap year (it is not divisible by 4)
    } else if (year % 100 !== 0) {
        return true;  // The year is a leap year (it is not divisible by 100)
    } else if (year % 400 !== 0) {
        return false;  // The year is not a leap year (it is not divisible by 400)
    } else {
        return true;  // The year is a leap year (it is divisible by 400)
    }
}

// Do not edit below this line
module.exports = leapYears;

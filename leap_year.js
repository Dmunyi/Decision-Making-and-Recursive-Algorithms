function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    }
    if (year % 100 !== 0) {
      return true;
    }
    if (year % 400 !== 0) {
      return false;
    }
    return true;
  }

console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2400)); 
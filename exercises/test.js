"use strict";

function isLeapYear(year) {
  var yearIsDivisibleBy4 = year % 4 == 0;
  var yearIsACentury = year % 100 != 0;
  var yearIsDivisibleBy400 = year % 400 == 0;

  if (yearIsDivisibleBy4) {
    if (yearIsACentury || yearIsDivisibleBy400) {
        return true;
    } else {
        return false;
    }
  } else {
    return false;
  }

  return yearIsDivisibleBy4 && (yearIsACentury || yearIsDivisibleBy400);
}



var yearIn = 1906;

if (isLeapYear(yearIn)) {
  console.log("You beautiful man! " + yearIn + " is a leap year!");
} else {
  console.log("YOU LOSER!!! I can't believe you didn't know that " + yearIn + " is NOT a leap year!");
}
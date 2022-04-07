// import moment here; use this package in each function
const moment = require('moment'); 

const today = () => {
  // write code for dates.today
let todayDate = moment().format('dddd');
return todayDate;

}

const calendar = () => {
  // write code for dates.calendar
let calendarDate = moment().format('MMM DD, YYYY'); 
// month abrviated to three letters
return calendarDate;
}

const currentTime = () => {
  // write code for dates.currentTime
  let thetime = moment().format('hh:mm:ss A');
  // shows time with a 0 before the first number
  return thetime;

}

module.exports = {
  today,
  calendar,
  currentTime
}
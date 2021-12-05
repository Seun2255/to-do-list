const timeFormat = {
  month: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  day: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const currentDay = new Date();

const day = timeFormat.day[currentDay.getDay()];
const month = timeFormat.month[currentDay.getMonth()];
const date = currentDay.getDate();

const newDay = day + ', ' + month + ' ' + date;

export default newDay;
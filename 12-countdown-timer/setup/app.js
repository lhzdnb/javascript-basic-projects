const months = [
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
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let futureDate = new Date();

futureDate.setDate(tempDate.getDate() + 10);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getHours();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const am = hours >= 12 ? "PM" : "AM";

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year} ${hours}:${mins}${am}`;

// future time in ms
const futureTime = futureDate.getTime();
function getRemainigTime() {
  const today = new Date().getTime();
  let temp = futureTime - today;
  const remainingDays = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp %= 24 * 60 * 60 * 1000;
  const remainingHours = Math.floor(temp / (60 * 60 * 1000));
  temp %= 60 * 60 * 1000;
  const remainingMins = Math.floor(temp / (60 * 1000));
  temp %= 60 * 1000;
  const remainingSecs = Math.floor(temp / 1000);
  temp %= 1000;

  if (futureTime < today) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  } else {
    return [remainingDays, remainingHours, remainingMins, remainingSecs];
  }
}

function format(item) {
  if (item < 10) {
    return item.toString().padStart(2, "0");
  } else {
    return item;
  }
}

// count down
const countDown = setInterval(() => {
  const remainingTime = getRemainigTime();

  items.forEach((item, index) => {
    item.innerHTML = format(remainingTime[index]);
  });
}, 1000);

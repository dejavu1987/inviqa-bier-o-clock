const bierOClock = [17, 0];

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  if (t < 0) {
    t = 0;
  }
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var msg = document.getElementById('message');

  // var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    // daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      msg.innerHTML = "It's Bier O' Clock!";
      document.body.style.color = 'red';
      document.body.className = 'red';
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
var today = new Date();
var time =
  (bierOClock[0] - today.getHours()) * 60 * 60 -
  (today.getMinutes() - bierOClock[1]) * 60 -
  today.getSeconds();
console.log(time);
var deadline = new Date(+new Date() + time * 1000);

initializeClock('clockdiv', deadline);

if (today.getHours() >= 17) {
  window.toggleConfetti(true);
}

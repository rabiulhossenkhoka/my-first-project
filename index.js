let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")
let display = document.querySelector(".display")

let msec = 0;
let sec = 0;
let min = 0;
let timerid = null;
start.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(timer, 10);
});
stop.addEventListener("click", function () {
  clearInterval(timerid);

});
reset.addEventListener("click", function () {
  clearInterval(timerid);
  display.innerHTML = `00:00:00`;
  msec = sec = min = 0;
});
function timer() {
  msec++;
  if (msec == 100) {
    sec++;
    msec = 0;
    if (sec == 60) {
      min++;
      sec = 0;
    }
  }
   let msecstr= msec <10?`0${msec}`:msec;
   let secstr= sec <10?`0${sec}`:sec;
   let minstr= min<10?`0${min}`:min;
   display.innerHTML=`${min}:${sec}:${msec}`;
}
function timeShower () {
  var timenow = new Date();

  document.querySelector(".hour").textContent = timenow.getHours();
  document.querySelector(".minut").textContent = timenow.getMinutes();
  document.querySelector(".second").textContent = timenow.getSeconds();
}
timeShower();

setInterval(function(){
  timeShower();

}, 1000);


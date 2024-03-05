// let date = new Date();
 // console.log(date);
// let day = date.getDay();
// console.log(day);
// let hour = date.getHours();
// console.log(hour)
// let min = date.getMinutes();
// console.log(min);
// let snd = date.getSeconds();
// console.log(snd);

const hourSpan = document.getElementById("hour");
const minSpan = document.getElementById("min");
const secSpan = document.getElementById("sec");
const amorpmSpan = document.getElementById("amorpm");

function changeTime (){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let amorpm;
    if(hour >= 0 || hour <=12){
        amorpm = " am";
    }
    else{
        amorpm = "pm"
    }
    hourSpan.textContent = hour;
    minSpan.textContent = min;
    secSpan.textContent = sec;
    amorpmSpan.textContent = amorpm;

    // console.log(hour,min,sec);
}
setInterval(changeTime,1000);
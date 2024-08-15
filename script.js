"use strict"
let hour=document.querySelector("#hour")
let second=document.querySelector("#second")
let minute=document.querySelector("#minute")

setInterval(() => {
let time = new Date(); 
let	hr = time.getHours();
let	min = time.getMinutes();
let	sec = time.getSeconds();
let	hoursrotate = 30 * hr + min / 2; 
let	minuterotate = 6 * min;
let	secondrotate = 6 * sec;
	hour.style.transform = `rotate(${hoursrotate}deg)`;
    second.style.transform = `rotate(${secondrotate}deg)`;
    minute.style.transform = `rotate(${minuterotate}deg)`;
}, 1000);

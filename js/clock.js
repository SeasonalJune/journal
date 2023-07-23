
const days = document.querySelector("#days");
const clock = document.querySelector("#clock");

function getDate() {
    const date = new Date();
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    days.innerText = `🗓️Today is 
    ${month} / ${day}`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `⏰Now
    ${hours}:${minutes}:${seconds}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
const clock = document.querySelector('#clock');
const day = document.querySelector('#day');

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    let h = hours < 12 ? "am" : "pm";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');       

    clock.innerHTML = `${hours}<span class="colon">:</span>${minutes} ${h}`;
}

function getday() {
    const now = new Date();
    const nowday = new Intl.DateTimeFormat('ko-KR',{dateStyle: "full"}).format(now);
    day.innerText = nowday;
    }

getday();
setInterval(getday, 1000);
getClock();
setInterval(getClock,1000);

const clock = document.querySelector('#clock');

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

getClock();
setInterval(getClock,1000);

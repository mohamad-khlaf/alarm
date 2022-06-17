
let selectMenu = document.querySelectorAll("select"),
    hour = document.querySelector(" section.alarm h1"),
    selectTime = document.querySelector(" section.alarm .select-time"),
    setAlarmBtn = document.querySelector("section.alarm button");

let alarmTime = "00:00:00",
    runningTone = new Audio("../files/ringtone.mp3"),
    isAlarmSet = false;


for(i = 12; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for(i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
} 
for(i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}




setInterval(() => {

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    
    // function addZero(zero) {
    //        return zero = zero < 10 ? "0" + zero : zero ;
    // }

    // addZero(h);
    // addZero(m);
    // addZero(s);

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let ampm = "AM";

    if (h >= 12) {
        h -= 12;
         ampm = "PM";
    }


    hour.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m}:${ampm}`) {
        // Notify.success('alram now is running');
        console.log('alram now is running');
        runningTone.play();
        runningTone.loop = true;

    }

},1000);

function setAlarm() {

    if (isAlarmSet) {
        runningTone.pause();
        alarmTime = "00:00:00";
        selectTime.classList.remove("disable");
        setAlarmBtn.textContent = "set alarm";
        return isAlarmSet = false ;
    }
    let time =`${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

    if (time.includes("hour") || time.includes("mintue") || time.includes("AM/PM")) {
        // Notify.success('Sol lucet omnibus');
        alert("enter valid time");
    }
    isAlarmSet = true;
    alarmTime = time
    selectTime.classList.add("disable");
    setAlarmBtn.textContent = "clear alarm";




}

setAlarmBtn.addEventListener("click", setAlarm);


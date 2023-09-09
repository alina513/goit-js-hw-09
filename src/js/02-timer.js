import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let data = new Date();
        if (selectedDates[0].getTime() < data.getTime())
        { alert('Please choose a date in the future')}
        else {start.disabled = false}
      console.log(selectedDates[0]);
    
    },})


const input = document.querySelector("#datetime-picker");
const start = document.querySelector("button");
const spanHours = document.querySelector('span[data-hours]');
const spanDays = document.querySelector('span[data-days]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');


start.addEventListener("click", onStart);
start.disabled = true;

 


    function onStart() {
        let chooseDate = new Date(input.value);
        let chooseTime = chooseDate.getTime();

        start.disabled = true;
        setInterval(() => {
            
            let currentTime = Date.now();
            let newTime = chooseTime - currentTime;
            convertMs(newTime);},  1000)};
 
            
            function convertMs(ms) {
            
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
              
                // Remaining days
                const days =addLeadingZero(Math.floor(ms / day));
                // Remaining hours
                const hours =addLeadingZero(Math.floor((ms % day) / hour));
                // Remaining minutes
                const minutes =addLeadingZero(Math.floor(((ms % day) % hour) / minute));
                // Remaining seconds
                const seconds =addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
                
                spanHours.textContent = hours;
                spanDays.textContent = days;
                spanMinutes.textContent = minutes;
                spanSeconds.textContent = seconds;
                
                return { days, hours, minutes, seconds };
                
              }
              
              function addLeadingZero(value) {
                return String(value).padStart(2, '0');
            };
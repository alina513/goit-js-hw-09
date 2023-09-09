import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },})
const input = document.querySelector("#datetime-picker");
const start = document.querySelector("button");

start.addEventListener("click", onStart);

let chooseDate = new Date(input.value);
let chooseTime = chooseDate.getTime();


    function onStart() {
        setInterval(() => {
            let currentDate = new Date();
            let currentTime = currentDate.getTime();
            
            let newTime = chooseTime - currentTime;
            console.log(convertMs(newTime));},  1000)};

            function convertMs(ms) {
                // Number of milliseconds per unit of time
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
              
                // Remaining days
                const days = Math.floor(ms / day);
                // Remaining hours
                const hours = Math.floor((ms % day) / hour);
                // Remaining minutes
                const minutes = Math.floor(((ms % day) % hour) / minute);
                // Remaining seconds
                const seconds = Math.floor((((ms % day) % hour) % minute) / second);
              
                return { days, hours, minutes, seconds };
              }
              
               
              
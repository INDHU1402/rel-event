const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
let dt = localStorage.getItem('EventDate');

let countDown = new Date(dt).getTime(),
    x = setInterval(function() {    
      let now = new Date().getTime(),
          distance = countDown - now;
         if(distance > 0 ) {
          document.getElementById('days').innerText = Math.floor(distance / (day)),
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
         }
         else {
          document.getElementById('days').innerText = "over",
          document.getElementById('hours').innerText = "over",
          document.getElementById('minutes').innerText = "over",
          document.getElementById('seconds').innerText = "over";
         }

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
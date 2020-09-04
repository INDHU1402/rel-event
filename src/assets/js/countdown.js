const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
let dt = localStorage.getItem('EventDate');

let countDown = new Date(dt).getTime(),
    x = setInterval(function() {    
      let now = new Date().getTime(),
          distance = countDown - now;
          let days = Math.floor(distance / (day));
          let hours = Math.floor((distance % (day)) / (hour));
          let mins = Math.floor((distance % (hour)) / (minute));
          let seconds = Math.floor((distance % (minute)) / second);
          //console.log('days = '+ days + ' hours = '+ hours + ' mins = ' + mins + ' seconds = '+ seconds);
       
         
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
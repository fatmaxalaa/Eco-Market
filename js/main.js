const countdown = () => {
        const countDate = new Date('july 22, 2022 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const sec = 1000;
        const min = sec * 60;
        const hour = min * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / min);
        const textSec = Math.floor((gap % min) / sec);

        document.querySelector(".day").innerHTML = textDay;
        document.querySelector(".hour").innerHTML = textHour;
        document.querySelector(".minute").innerHTML = textMinute;
        document.querySelector(".second").innerHTML = textSec;


        const countDate2 = new Date('july 13, 2022 00:00:00').getTime();
        const gap2 = countDate2 - now;

        const textDay2 = Math.floor(gap2 / day);
        const textHour2 = Math.floor((gap2 % day) / hour);
        const textMinute2 = Math.floor((gap2 % hour) / min);
        const textSec2 = Math.floor((gap2 % min) / sec);

        document.querySelector(".day2").innerHTML = textDay2;
        document.querySelector(".hour2").innerHTML = textHour2;
        document.querySelector(".minute2").innerHTML = textMinute2;
        document.querySelector(".second2").innerHTML = textSec2;
};


setInterval(countdown, 1000);




//Audio...


var myAudio = document.getElementById("myAudio");
var Icon = document.getElementById("icon");
var isPlaying = false;

function togglePlay() {
        isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function () {
        isPlaying = true;
        var change = document.getElementById("off");
        change.innerText = "On";
        change.style.color = 'green';
        Icon.style.color = 'green';
   

        
};
myAudio.onpause = function () {
        isPlaying = false;
        var change = document.getElementById("off");
        change.innerText = "OFF";
        change.style.color = '#FD2155';
         Icon.style.color = '#FD2155';
        
};



//Scroll To Top....


function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}


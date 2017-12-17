// variables
var christmasMonth = 12,
    christmasDay = 25;
var date,
    currentMonth,
    currentDay,
    currentHours,
    currentMinutes,
    currentSeconds;
    
//events
window.onload = function() {
    updateData();
    
    //only for init the library AOS(Animate On Scroll)
    //https://michalsnik.github.io/aos/
    AOS.init();
}

//functions
function $(element) {
    return document.querySelector(element);
}

function getCurrentDate() {
    date = new Date(),
    currentMonth = date.getMonth() + 1,
    currentDay = date.getDate() + 1 ,
    currentHours = date.getHours() + 1 ,
    currentMinutes = date.getMinutes() + 1,
    currentSeconds = date.getSeconds() + 1;
}

function confersTimeDifference() {
    if(currentMonth == christmasMonth && currentDay == christmasDay) {
        $("#main .container .countdown").style.display = "none";
        $("#main .container h2").innerHTML = "Hoje é Natal!";
        $("#main .container h3").innerHTML = "Que seu dia seja incrível";
    }
    else if(currentMonth == christmasMonth && currentDay > christmasDay) {
        $("#main .container .month").innerHTML = 11;
        $("#main .container .day").innerHTML = 31 - currentDay;
        $("#main .container .hours").innerHTML = 24 - currentHours;
        $("#main .container .minutes").innerHTML = 60 - currentMinutes;
        $("#main .container .seconds").innerHTML = 60 - currentSeconds;
    }
    else {
        $("#main .container .month").innerHTML = christmasMonth - currentMonth;
        $("#main .container .day").innerHTML = christmasDay - currentDay;
        $("#main .container .hours").innerHTML = 24 - currentHours;
        $("#main .container .minutes").innerHTML = 60 - currentMinutes;
        $("#main .container .seconds").innerHTML = 60 - currentSeconds;
    }
}

function updateData() {
    setTimeout(function() {
        getCurrentDate();
        confersTimeDifference();
        updateData();
    }, 1000);
}

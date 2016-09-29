/*sets a variable with an element with the id of fortune (the div) */
var myFortune = document.getElementById("fortune");
/*sets a variable with the button element */
var btn = document.getElementById("fortuneBtn");
/*Where the message will be located*/
var ftnMessage = document.getElementById("fortuneMessage");
/* the fortune array */
var fortuneArray = [];
fortuneArray[0] = 'There will be no train delays.';
fortuneArray[1] = 'Meh.';
fortuneArray[2] = 'Time is an illusion, but your illusion is running out.';
fortuneArray[3] = 'Maybe its time start going to church.';
fortuneArray[4] = 'Maybe that one girl/guy will give you their number.';
fortuneArray[5] = 'Being held prisoner in design firm, send help.';
fortuneArray[6] = 'There will be pineapples on your pizza';
fortuneArray[7] = 'The Elder Gods glance in your direction.';
fortuneArray[8] = 'You can do the thing.';

/* function for the button*/
function btnClick() {
    var rand = Math.floor(Math.random() * (fortuneArray.length));
    var ftnRand = fortuneArray[rand];
    if (btn.className == "newCookie") {
        ftnMessage.textContent = ftnRand;
        btn.innerHTML = ("Open a new cookie?");
        btn.className = ("opened");

    } else {
        /* clears the fortune message */
        btn.className = "newCookie";
        ftnMessage.innerHTML = "";
        btn.innerHTML = '<img src=\'images/fortune-cookie.png\'>';
    }

}
btn.addEventListener("click", btnClick, false);
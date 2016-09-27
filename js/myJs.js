/*sets a variable with an element with the id of fortune (the div) */
var myFortune = document.getElementById("fortune");
/*sets a variable with the button element */
var btn = document.getElementById("fortuneBtn");
/*Where the message will be located*/
var ftnMessage = document.getElementById("fortuneMessage");
/* the fortune array */
var fortuneArray = [];
fortuneArray[0] = 'Fortune 1';
fortuneArray[1] = 'Fortune 2';
fortuneArray[2] = 'Fortune 3';
fortuneArray[3] = 'Fortune 4';
fortuneArray[4] = 'Fortune 5';
fortuneArray[5] = 'Fortune 6';
fortuneArray[6] = 'Fortune 7';
fortuneArray[7] = 'Fortune 8';
fortuneArray[8] = 'Fortune 9';

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
        btn.innerHTML = ("Open the Fortune Cookie!");
    }

}
btn.addEventListener("click", btnClick, false);
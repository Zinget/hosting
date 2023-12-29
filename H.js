var text = document.getElementById("text");
var button = document.getElementById("change");
var main = document.getElementById("main");
var counter = 0;

document.getElementById("change").addEventListener("click", () => {
    counter++;
    if (counter == 1) {
        text.innerText = "Do you know that";
    }
    if (counter == 2) {
        text.innerText = "This person =>";
    }
    if (counter == 3) {
        text.innerHTML = "<img src='Images/Me.png' alt='pic' style='width: 600px'>";
    }
    if (counter == 4) {
        text.innerHTML = "is madly in love with";
    }
    if (counter == 5) {
        text.innerHTML = "This person? =>";
    }
    if (counter == 6) {
        text.innerHTML = "<img src='Images/Her.png' alt='pic' style='width: 600px'>";
    }
    if (counter == 7) {
        text.innerHTML = "I love you 😍💕"
    }
    if (counter == 8) {
        text.innerHTML = "<img src='Images/Us.jpg' alt='pic' style='width: 600px'>";
    }
    if (counter == 9) {
        main.innerHTML = "Ok bye";
    }
})
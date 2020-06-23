var css = document.querySelector("h3")
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body")


function setGradinet() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + " ;"
}

function randomColor() {
    var r1 = Math.floor(Math.random() * 256).toString(16);
    var g1 = Math.floor(Math.random() * 256).toString(16);
    var b1 = Math.floor(Math.random() * 256).toString(16);

    var r2 = Math.floor(Math.random() * 256).toString(16);
    var g2 = Math.floor(Math.random() * 256).toString(16);
    var b2 = Math.floor(Math.random() * 256).toString(16);

    if (r1.length < 2) {
        r1 = "0" + r1;
    }

    if (g1.length < 2) {
        g1 = "0" + g1;
    }

    if (b1.length < 2) {
        b1 = "0" + b1;
    }

    if (r2.length < 2) {
        r2 = "0" + r2;
    }

    if (g2.length < 2) {
        g2 = "0" + g2;
    }

    if (b2.length < 2) {
        b2 = "0" + b2;
    }

    var randomColor1 = "#" + r1 + g1 + b1;
    var randomColor2 = "#" + r2 + g2 + b2;


    body.style.background = "linear-gradient(to right, "
        + randomColor1
        + ", "
        + randomColor2
        + ")";
    css.textContent = body.style.background + " ;"
    color1.value = randomColor1;
    color2.value = randomColor2;

}

setGradinet();


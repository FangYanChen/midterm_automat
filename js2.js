const text = document.createElement("h1");
text.innerText = "Fading Text";
document.body.appendChild(text);

let opacity = 0;
let fadeIn = true;

function fadeText() {
    if (fadeIn) {
        opacity += 0.05;
        if (opacity >= 1) fadeIn = false;
    } else {
        opacity -= 0.05;
        if (opacity <= 0) fadeIn = true;
    }
    text.style.opacity = opacity;
}

setInterval(fadeText, 100);

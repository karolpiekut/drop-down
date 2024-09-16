const menuButton = document.querySelector("#menuButton");
const menuButtons = document.querySelectorAll(".menu-buttons");
const menu = document.querySelector("#menu");

let buttonState = 0;

function showMenu() {
    if (buttonState === 0) {
        buttonState = 1;
        menuButton.style.background = "#FFE4C4FF"
        menu.style.height = "103px";
    } else if (buttonState === 1) {
        buttonState = 0;
        menuButton.style.background = "#ffffff"
        menu.style.height = "0";
    }
}

function hoverOver() {
    this.style.background = "rgba(127, 255, 212, 1)"
}

function hoverOut() {
    this.style.background = "rgba(127, 255, 212, 0.35)"
}

menuButton.addEventListener("click", showMenu);

menuButtons.forEach(button => {
    button.addEventListener("mouseover", hoverOver);
    button.addEventListener("mouseout", hoverOut);
})
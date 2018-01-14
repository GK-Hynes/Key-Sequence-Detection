const StandardLogo = document.querySelector(".logo__standard");
const gifLogo = document.querySelector(".logo__gif");
const keycode = document.querySelector(".keycode");

const pressed = [];
const secretCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

function replaceLogo() {
  StandardLogo.classList.add("hidden");
  keycode.classList.add("hidden");
  gifLogo.classList.add("active");
}

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING!");
    replaceLogo();
  }
  console.log(pressed);
});

const cm = document.querySelector(".click");

function showContextMenu(show = true) {
  cm.style.display = show ? "block" : "none";
}

window.addEventListener("contextmenu", e => {
  e.preventDefault();

  showContextMenu();
  cm.style.top =
    e.y + cm.offsetHeight > window.innerHeight
      ? window.innerHeight - cm.offsetHeight
      : e.y;
  cm.style.left =
    e.x + cm.offsetWidth > window.innerWidth
      ? window.innerWidth - cm.offsetWidth
      : e.x;
});

window.addEventListener("click", () => {
  showContextMenu(false);
});





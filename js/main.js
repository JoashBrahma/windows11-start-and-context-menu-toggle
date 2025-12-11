const taskbar = document.querySelector(".taskbar");
const desktop = document.querySelector(".desktop");
const startMenu = document.querySelector(".start-menu");
const contextMenu = document.querySelector(".context-menu");
const startButton = document.querySelector(".start-btn");

function toggleStartMenu() {
  startMenu.classList.toggle("start-menu--show");
}

function closeStartMenu() {
  startMenu.classList.remove("start-menu--show");
}

function toggleContextMenu() {
  contextMenu.classList.toggle("context-menu--show");
}

function closeContextMenu() {
  contextMenu.classList.remove("context-menu--show");
}

function attachMenuHideHandler(element) {
  element.addEventListener("click", () => {
    closeStartMenu();
    closeContextMenu();
  });
}

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  toggleStartMenu();
  closeContextMenu();
});

desktop.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  contextMenu.style.top = e.clientY + "px";
  contextMenu.style.left = e.clientX + "px";

  toggleContextMenu();
  closeStartMenu();
});

attachMenuHideHandler(desktop);
attachMenuHideHandler(taskbar);
document.querySelector(".hamburger-menu").addEventListener("click", () => {
	document.querySelector(".nav-bar-container").classList.toggle("nav-closed");
	document.querySelector(".hamburger-menu").classList.toggle("hamburger-opened");
});

document.querySelector("#project-item-1").addEventListener("click", () => {
	document.querySelector("#project-overlay-1").classList.toggle("element-closed");
});
document.querySelector("#project-item-2").addEventListener("click", () => {
	document.querySelector("#project-overlay-2").classList.toggle("element-closed");
});
document.querySelector("#project-item-3").addEventListener("click", () => {
	document.querySelector("#project-overlay-3").classList.toggle("element-closed");
});
document.querySelector("#project-item-4").addEventListener("click", () => {
	document.querySelector("#project-overlay-4").classList.toggle("element-closed");
});

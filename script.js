document.querySelector(".hamburger-menu").addEventListener("click", () => {
	const selection = document.querySelector(".nav-bar-container").classList[3];
	if (selection == "element-closed") {
		document.querySelector(".nav-bar-container").className = "nav-bar-container element-opened";
		document.querySelector(".hamburger-menu").className = "hamburger-menu hamburger-opened";
	} else {
		document.querySelector(".nav-bar-container").className = "nav-bar-container element-closed";
		document.querySelector(".hamburger-menu").className = "hamburger-menu hamburger-closed";
	}
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

document.querySelector(".hamburger-menu").addEventListener("click", () => {
	const selection = document.querySelector(".nav-bar-container").classList[1];
	if (selection == "nav-closed") {
		document.querySelector(".nav-bar-container").className = "nav-bar-container nav-opened";
		document.querySelector(".hamburger-menu").className = "hamburger-menu hamburger-opened";
	} else {
		document.querySelector(".nav-bar-container").className = "nav-bar-container nav-closed";
		document.querySelector(".hamburger-menu").className = "hamburger-menu hamburger-closed";
	}
});

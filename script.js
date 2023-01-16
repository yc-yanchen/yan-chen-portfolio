document.querySelector(".hamburger-menu").addEventListener("click", () => {
	document.querySelector(".nav-bar-container").classList.toggle("nav-closed");
	document.querySelector(".hamburger-menu").classList.toggle("hamburger-opened");
});

// Create a node list of all project-items
const projectItems = document.querySelectorAll('.project-item');

// Take the id of each item, then add an event listener to it which allow the opening and closing of the textbox
projectItems.forEach((item) => {
	document.querySelector(`#${item.id}`).addEventListener('click', () => {
		document.querySelector(`#${item.children[1].id}`).classList.toggle('element-closed');
	});
});


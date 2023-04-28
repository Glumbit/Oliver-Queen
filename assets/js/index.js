const burger = document.querySelectorAll('.burger');
const nav = document.querySelector('.navbar-nav-custom');
const navItem = document.querySelectorAll('.nav-item');

showNav(burger)
showNav(navItem)

function showNav(collection) {
	for (const i in collection) {
		if (Object.hasOwnProperty.call(collection, i)) {
			const element = collection[i];
			element.addEventListener("click", function () {
				nav.classList.toggle("navbar-nav-custom-active");
			})
		}
	}
}

const burgerOpen = document.querySelector('.burger-open');

document.addEventListener('click', (e) => {
	const insideNav = e.composedPath().includes(nav);
	const insideBurgerOpen = e.composedPath().includes(burgerOpen);
	if (!insideNav && !insideBurgerOpen) nav.classList.remove("navbar-nav-custom-active");
})
const nav = document.querySelector('.navbar-nav-custom');

showNav(document.querySelectorAll('.burger'))
showNav(document.querySelectorAll('.nav-item'))

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

document.addEventListener('click', (e) => {
	const insideNav = e.composedPath().includes(nav);
	const insideBurgerOpen = e.composedPath().includes(document.querySelector('.burger-open'));
	if (!insideNav && !insideBurgerOpen) nav.classList.remove("navbar-nav-custom-active");
})

const educationObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("education-item-active")
				observer.unobserve(entry.target)
			}
		});
	},
	{
		rootMargin: '-100px'
	}
);

document.querySelectorAll('.education-item').forEach(educationItem => educationObserver.observe(educationItem))
const header = document.querySelector('header');
window.addEventListener("scroll", () => {
	const about = document.querySelector('.about');
	if (about.offsetTop <= window.scrollY) {
		header.classList.add("header--fixed")
	}
	else {
		header.classList.remove("header--fixed")
	}
})

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

const dots = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("dot-active")
				observer.unobserve(entry.target)
			}
		});
	},
	{
		rootMargin: '-100px'
	}
);

document.querySelectorAll('.dot').forEach(dot => dots.observe(dot))

document.querySelector('.btn-more').addEventListener("click", () => {
	for (let i = 0; i < 3; i++) {
		document.querySelector('.blog--hidden').classList.remove('blog--hidden');
	}
})
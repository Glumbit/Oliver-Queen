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
// const skillsRange = document.querySelectorAll('.skills-range');
// for (const key in skillsRange) {
// 	if (Object.hasOwnProperty.call(skillsRange, key)) {
// 		const el = skillsRange[key];
// 		el.addEventListener("change", () => {
// 			console.log(el.value);
// 			console.log(el.parentElement.previousElementSibling);
// 			el.parentElement.previousElementSibling.textContent = `${el.value}%`
// 		})
//
// 	}
// }
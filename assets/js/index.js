const burger = document.querySelectorAll('.burger');
for (const i in burger) {
	if (Object.hasOwnProperty.call(burger, i)) {
		const element = burger[i];
		element.addEventListener("click", function () {
			document.querySelector('.navbar-nav-custom').classList.toggle("navbar-nav-custom-active");
		})
	}
}
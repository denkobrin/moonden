function buttonHoldChangeStyle(el, btn_style_class) {
	el.addEventListener("mousedown", function () {
		el.classList.add(btn_style_class);
		console.log('work');
	});
	el.addEventListener("mouseup", function () {
		el.classList.remove(btn_style_class)
	});
	el.addEventListener("mouseout", function () {
		el.classList.remove(btn_style_class)
	});
}

document.querySelectorAll('.button_online').forEach(el_mass => {
	buttonHoldChangeStyle(el_mass, 'button_online--push')
});
document.querySelectorAll('.button_shell').forEach(el_mass => {
	buttonHoldChangeStyle(el_mass, 'button_shell--push')
});

document.querySelectorAll('.button_left_examples').forEach(function (element) {
	element.addEventListener("dblclick", function (event) {
		event.preventDefault();
	});
});

document.querySelectorAll('a[href="#"]').forEach(function (element) {
	element.addEventListener("click", function (event) {
		event.preventDefault();
	});
});
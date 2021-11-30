// let element = document.querySelectorAll('.button_online')[0];
// element.addEventListener("mousedown", function() {
//   element.classList.add('button_online--push')
// });
// element.addEventListener("mouseup", function() {
//   element.classList.remove('button_online--push')
// });
// element.addEventListener("mouseout", function() {
//   element.classList.remove('button_online--push')
// });


// let knopka = document.querySelectorAll('.button_shell')[0];
// knopka.addEventListener("mousedown", function() {
//   knopka.classList.add('button_shell--push')
// });
// knopka.addEventListener("mouseup", function() {
//   knopka.classList.remove('button_shell--push')
// });
// knopka.addEventListener("mouseout", function() {
//   knopka.classList.remove('button_shell--push')
// });



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

document.querySelectorAll('.button_online').forEach(el_mass => {buttonHoldChangeStyle(el_mass, 'button_online--push')} );
document.querySelectorAll('.button_shell').forEach(el_mass => {buttonHoldChangeStyle(el_mass, 'button_shell--push')} );

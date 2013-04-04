var body02 = document.getElementById('body02');
var header02inner = document.getElementById('header02_inner');
var body01inner = document.getElementById('body01_inner');

if (window.attachEvent) { // for IE
	body02.attachEvent('onscroll', doScroll);
} else {
	body02.addEventListener('scroll', doScroll, false);
}

function doScroll(event) {
	console.log('doScroll');
	var left;
	var top;

	if (event.srcElement) { // for IE
		left = event.srcElement.scrollLeft;
		top = event.srcElement.scrollTop;
	} else {
		left = event.target.scrollLeft;
		top = event.target.scrollTop;
	}

	body01inner.style.top = (-top) + 'px';
	header02inner.style.left = (-left) + 'px';
}
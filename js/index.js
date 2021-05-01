//  HEADER SCROLL EFFECT
window.onscroll = function(){
var top =	 window.pageYOffset || document.documentElement.scrollTop;
if (top > 444) {
	document.getElementById('headerian').classList.remove("py2");
	document.getElementById('headerian').classList.add("box-shadow", "py1", "transition");
} else {
	document.getElementById('headerian').classList.remove("box-shadow", "py1", "transition");
	document.getElementById('headerian').classList.add("py2", "transition");
}
};
let burger = document.querySelector('#burger');
let close = document.querySelector('.close');
let sidenav = document.querySelector('#sidenav');
let overlay = document.querySelector('#overlay');

let classOpen = [sidenav, overlay];
burger.addEventListener('click', function(e){
	classOpen.forEach(e => e.classList.add('active'));
});

let classCloseClick = [overlay, close];
classCloseClick.forEach(function(el) {
	el.addEventListener('click', function(els) {
		classOpen.forEach(els => els.classList.remove('active'));
	});
});

// Initialize library
lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade-lozad')
        }
    }
}).observe()
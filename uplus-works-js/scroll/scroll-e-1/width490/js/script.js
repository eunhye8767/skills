var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	duration: 100, //"length" of the animation in terms of number of scrolled pixels,
})
.setTween("#moveCircle-box", { //<--the actual element being animated
	//describe the "ending state" of the animation...
	borderRadius: '50%',
	width: '400px',
	height: '400px',
	scale: 1,
	bottom: '9%',
})
.setClassToggle('#moveCircle-box', 'animate')
.addTo(controller);
const portfolioSlider = document.querySelector('.projects__projectsSlider');

const hammertime = new Hammer(portfolioSlider);
hammertime.on('pan', function(ev) {
	console.log(ev);
});
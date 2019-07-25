if (window.innerWidth < 768) {
	const logosCont = document.querySelector(".logos__cont");
	const allLogos = document.querySelectorAll(".logos__img");
	let currLogo = 0;
	const changeLogo = direction => {
        let nextLogo = currLogo + direction;
        console.log(nextLogo)
		if (nextLogo < allLogos.length && nextLogo >= 0) {
			currLogo = nextLogo;
			logosCont.style.transform = `translateX(${40 * -currLogo}vw`;
		} else if (nextLogo === allLogos.length) {
            logosCont.style.transform = `translateX(0)`;
            currLogo = 0;
        }
	};
	const logosSwipeHandler = new Hammer(logosCont);
	logosSwipeHandler.on("swipeleft", function(ev) {
		changeLogo(1);
	});
	logosSwipeHandler.on("swiperight", function(ev) {
		changeLogo(-1);
	});
	window.setInterval(() => changeLogo(1), 1000);
}

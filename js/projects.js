let currentSlide = 0;
const allBoxes = document.querySelectorAll('.projects__projectsBox');

const sliderDotCode ='<div class="projects__sliderDot"></div>';

const generateDots = () => {
    const dotsOutput = [];
    const dotsContainer = document.querySelector('.projects__sliderDots');
    allBoxes.forEach((_, index)=>dotsOutput.push(sliderDotCode));
    dotsContainer.innerHTML = dotsOutput.join('');
}

generateDots();

const allDots = document.querySelectorAll('.projects__sliderDot');


const styleElement = (elArr, activeIndex, elClassName) => {
    elArr.forEach((el, index) => {
        el.classList.remove(`${elClassName}--active`);
        if(index === activeIndex) {
            el.classList.add(`${elClassName}--active`);
        }
    });
}

const changeBox = (nextSlideNum) => {
    let slideToShow = nextSlideNum;
    if(nextSlideNum >= allBoxes.length) {
        slideToShow = 0;
    } else if(nextSlideNum < 0) {
        slideToShow = allBoxes.length
    }
    currentSlide = slideToShow;
    styleElement(allBoxes, currentSlide, 'projects__projectsBox');
    styleElement(allDots, currentSlide, 'projects__sliderDot');
}

let startSlideShow = setInterval(()=>changeBox(currentSlide+1), 5000);


const activateDots = () => {
    allDots.forEach((dot, index) => {
        if(index === currentSlide) {
            dot.classList.add('projects__sliderDot--active')
        }
        dot.addEventListener('click', ()=>{
            changeBox(index);
            clearInterval(startSlideShow);
            startSlideShow = setInterval(()=>changeBox(currentSlide+1), 5000);
        })
    })
}

activateDots()

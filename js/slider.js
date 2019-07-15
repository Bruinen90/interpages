const projectsArr = [
    {
        title: 'Awsome project 1',
        description: 'Nice webpage lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit, et itaque quo deleniti eos.',
        client: 'Play',
        date: '12-12-2012',
        role: 'Website development',
    },
    {
        title: 'Awsome project 2',
        description: 'Nice webpage lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit, et itaque quo deleniti eos.',
        client: 'Orange',
        date: '12-12-2013',
        role: 'Design',
    },
    {
        title: 'Awsome project 3',
        description: 'Nice webpage lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit, et itaque quo deleniti eos.',
        client: 'Plus',
        date: '12-12-2014',
        role: 'Mobile app',
    },
];

const projectsOutput = projectsArr.map((project, index) => {
    return(
        `<div class="slider__slide">
            <div class="projectGrid">
                <div class="projectGrid__description">
                    <h2 class="projectGrid__header">
                        ${project.title}
                    </h2>
                    <p class="projectGrid__text">
                        ${project.description}
                    </p>
                </div>
                <div class="projectGrid__info">
                    <div class="projectGrid__feature">
                        Client
                    </div>
                    <div class="projectGrid__value">
                        ${project.client}
                    </div>
                    <div class="projectGrid__feature">
                        Date
                    </div>
                    <div class="projectGrid__value">
                        ${project.date}
                    </div>
                    <div class="projectGrid__feature">
                        Role
                    </div>
                    <div class="projectGrid__value">
                        ${project.role}
                    </div>
                </div>
                <div
                    class="projectGrid__photoCont projectGrid__photoCont--big"
                >
                    <img
                        src="./img/photos/slider/slider_1.png"
                        alt="Project photo"
                        class="projectGrid__photo"
                    />
                </div>
                <div class="projectGrid__photoCont">
                    <img
                        src="./img/photos/slider/slider_2.png"
                        alt="Project photo"
                        class="projectGrid__photo"
                    />
                </div>
                <div class="projectGrid__photoCont">
                    <img
                        src="./img/photos/slider/slider_3.png"
                        alt="Project photo"
                        class="projectGrid__photo"
                    />
                </div>
            </div>
        </div>`
    )
})

const slider__slider = document.querySelector('.slider__cont');
console.log(slider__slider)
let currSlide__slider = 0;
const changeSlide__slider = (targetSlide) => {
    console.log('miau')
    if(targetSlide < 0) {
        currSlide__slider = projectsArr.length - 1;
    } else if (targetSlide >=projectsArr.length) {
        currSlide__slider = 0;
    } else {
        currSlide__slider = targetSlide;
    }
    slider__slider.style.transform = `translateX(calc(${-currSlide__slider * 100}%)`
}

slider__slider.innerHTML = projectsOutput.join('');

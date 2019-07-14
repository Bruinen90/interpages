const testiArr = [
    {
        name: 'Mike Adams',
        position: 'CTO',
        opinion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quam commodi ut culpa suscipit!'
    },
    {
        name: 'Angela Wilkinson',
        position: 'HR Specialist',
        opinion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo molestias autem nulla eveniet expedita nobis quia voluptate, quisquam, aspernatur voluptates, eaque nihil explicabo aperiam repudiandae a nam veritatis sed? Repellendus doloremque atque optio, possimus, perspiciatis dolores? Temporibus corrupti rerum dolorem, asperiores rem culpa, harum blanditiis nesciunt adipisci sed unde vitae iste nihil vero ut neque autem expedita deleniti laborum voluptate earum maiores ab consequatur. Ad eveniet accusantium cupiditate explicabo, asperiores eius corporis reprehenderit recusandae totam consectetur impedit cum nam omnis nemo illum ut sit ducimus accusamus nulla, non quasi quidem.'
    },
    {
        name: 'John Smith',
        position: 'CEO',
        opinion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor impedit, et itaque quo deleniti eos.'
    },
    {
        name: 'Paul Marcy',
        position: 'Brand manager',
        opinion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
];

const testiOutput = testiArr.map((client, index) => {
    return(
        `<div class="testi__slide">
            <div class="testi__clientCont">
                <div class="triangleImg">
                    <div
                        class="triangleImg__img"
                        style="background-image: url('./img/client_${index+1}.jpg')"
                    ></div>
                    <img
                        src="./img/triangleImg_egg.svg"
                        alt=""
                        class="triangleImg__egg"
                    />
                    <img
                        src="./img/triangleImg_border.svg"
                        alt=""
                        class="triangleImg__egg triangleImg__egg--frame"
                    />
                </div>
                <div class="testi__clientHeaders">
                    <h5 class="testi__name">
                        ${client.name}
                    </h5>
                    <div class="testi__clientPosition">
                        ${client.position}
                    </div>
                    <div class="testi__naviCont">
                        <div
                            class="testi__arrowCont"
                            onclick="changeSlide(currSlide-1)"
                        >
                            <img
                                src="./img/icons/arrow_left.svg"
                                alt="" class="testi__arrow"
                            />
                        </div>
                        <div
                            class="testi__arrowCont"
                            onclick="changeSlide(currSlide+1)"
                        >
                            <img
                                src="./img/icons/arrow_right.svg"
                                alt="" class="testi__arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="testi__textCont">
                <img src="./img/icons/quotes.png" alt="" class="testi__quotes" />
                <p class="testi__text">
                    ${client.opinion}
                </p>
            </div>
        </div>`
    )
})

let currSlide = 0;
const slider = document.querySelector('.testi__sliderCont');

const changeSlide = (targetSlide) => {
    console.log('miau')
    if(targetSlide < 0) {
        currSlide = testiArr.length - 1;
    } else if (targetSlide >=testiArr.length) {
        currSlide = 0;
    } else {
        currSlide = targetSlide;
    }
    slider.style.transform = `translateX(calc(${-currSlide * 100}% - ${currSlide * 60}px))`
}

slider.innerHTML = testiOutput.join('');

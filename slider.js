
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const slideList = [
    {
        img: "images/slide1.jpg",
        text: 'ZDJĘCIE 1'
    },
    {
        img: "images/slide2.jpg",
        text: 'ZDJĘCIE 2'
    },
    {
        img: "images/slide3.jpg",
        text: 'ZDJĘCIE 3'
    },
    {
        img: "images/slide4.jpg",
        text: 'ZDJĘCIE 4'
    },
    {
        img: "images/slide5.jpg",
        text: 'ZDJĘCIE 5'
    },
]

const time = 5000;
let active = 0;

const changeDot = ()=> {
    // dots.forEach(dots=> dots.classList.remove('active'));
    const activeDot = dots.findIndex(dot=> dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const slider = ()=> {
    active++;
    if(active === slideList.length) {
        active = 0;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}


const keyChangeSlide = (e)=> {
    if(e.keyCode===37 || e.keyCode===39) {
        clearInterval(idI);

        e.keyCode===37? active-- : active++
        if(active === slideList.length) {
            active = 0;
        } else if(active <0) {
            active = slideList.length - 1;
        }

        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        idI = setInterval(slider, time);
    }
}

let idI = setInterval(slider, time);
window.addEventListener('keydown', keyChangeSlide);



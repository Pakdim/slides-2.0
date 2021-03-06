const dots = document.getElementsByClassName ("dot");
const leftArrow = document.querySelector (".arrow.left");
const rightArrow = document.querySelector (".arrow.right");
const slides = document.getElementsByClassName ("slide");
const dotsArea = document.querySelector (".dots");

let index = 0;

function showSlide(i){
    for (let j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
    }
    slides[i].classList.add('active');
    index = i;
    dots[index].checked = true;
}

leftArrow.addEventListener('click', () => {
    let currentIndex = index === 0 ? slides.length - 1 : index - 1;
    showSlide(currentIndex);
})
rightArrow.addEventListener('click', () => {
    let currentIndex = index === slides.length - 1 ? 0 : index + 1;
    showSlide(currentIndex);
})
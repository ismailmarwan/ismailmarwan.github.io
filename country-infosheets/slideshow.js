var slideContainer = document.querySelector('.slide-container');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

var slideWidth = slideContainer.clientWidth;
var currentIndex = 0;

function goToSlide(index) {
  slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slideContainer.childElementCount;
  goToSlide(currentIndex);
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slideContainer.childElementCount) % slideContainer.childElementCount;
  goToSlide(currentIndex);
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

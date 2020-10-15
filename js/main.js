let carousel = new SwipeCarousel ();


carousel.init();
























// (function() {

// let container = document.querySelector('#carousel');
// let slides = container.querySelectorAll('.slide');
// let indicatorsContainer = container.querySelector('#indicators-container');
// let indicators = indicatorsContainer.querySelectorAll('.indicator');
// let controls = container.querySelector('#controls-container');
// let pauseBtn = controls.querySelector('#pause-btn');
// let prevBtn = controls.querySelector('#prev-btn');
// let nextBtn = controls.querySelector('#next-btn');

// let currentSlide = 0;
// let timerId = null;
// let slidesCount = slides.length;
// let interval = 2000;
// let isPlaying = true;
// let swipeStartX = null;
// let swipeEndX = null;

// const SPACE = ' ';
// const LEFT_ARROW = 'ArrowLeft';
// const RIGHT_ARROW = 'ArrowRight';
// const FA_PAUSE = '<i class="fas fa-pause"></i>';
// const FA_PLAY = '<i class="fas fa-play"></i>';


// function goToNth(n) {
//     slides[currentSlide].classList.toggle('active');
//     indicators[currentSlide].classList.toggle('active');
//     currentSlide = (slidesCount + n) % slidesCount;
//     slides[currentSlide].classList.toggle('active');
//     indicators[currentSlide].classList.toggle('active');
// }

// function gotoPrev() {
//     goToNth(currentSlide - 1);
// }

// function gotoNext() {
//     goToNth(currentSlide + 1);
// }

// function play() {
//     pauseBtn.innerHTML = FA_PAUSE;
//     isPlaying = !isPlaying;
//     timerId = setInterval(gotoNext, interval);
// }

// function pause() {
//     if (isPlaying){
//         pauseBtn.innerHTML = FA_PLAY;
//         isPlaying = !isPlaying;
//         clearInterval(timerId);
//     } 
// }

// function pausePlay() {
//     if (isPlaying) pause(); 
//     else play();
// }

// function prev() {
//     pause();
//     gotoPrev();
// };

// function next() {
//     pause();
//     gotoNext();
// };

// function indicate(e) {
//     let target = e.target;

//     if(target.classList.contains('indicator')) {
//         pause();
//         goToNth(+target.dataset.slideTo);
//     }
// }

// function pressKey(e) {
//     if (e.key === LEFT_ARROW) prev();
//     if (e.key === RIGHT_ARROW) next();
//     if (e.key === SPACE) pausePlay();
// }

// function swiperStart(e) {
//     swipeStartX = e.changedTouches[0].pageX;
// }

// function swiperEnd(e) {
//     swipeEndX = e.changedTouches[0].pageX;

//     swipeStartX - swipeEndX > 100 && next();
//     swipeStartX - swipeEndX < -100 && prev();
// }

// pauseBtn.addEventListener('click', pausePlay);
// prevBtn.addEventListener('click', prev);
// nextBtn.addEventListener('click', next);
// indicatorsContainer.addEventListener('click', indicate);
// document.addEventListener('keydown', pressKey);
// container.addEventListener('touchstart', swiperStart);
// container.addEventListener('touchend', swiperEnd);

// timerId = setInterval(gotoNext, interval);
// })();
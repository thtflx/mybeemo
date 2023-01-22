// // SLIDER
// const sliderContainer = document.querySelector('.slider-container');
// const slider = document.querySelector('.slider');

// let clicked = false;
// let xAxis;
// let x;

// sliderContainer.addEventListener('mouseup', () => {
//     sliderContainer.style.cursor = `grab`;
// })
// sliderContainer.addEventListener('mousedown', e => {
//     clicked = true
//     xAxis = e.offsetX - slider.offsetLeft;
//     // tells the current position

//     sliderContainer.style.cursor = `grabbing`
// })

// window.addEventListener('mouseup', () => {
//     clicked = false
// })

// sliderContainer.addEventListener('mousemove', e => {
//     if (!clicked) return;
//     e.preventDefault();

//     x = e.offsetX;
//     slider.style.left = `${x - xAxis}px`;
//     // but we dont want it to scroll forever

//     checkSize()
// })

// function checkSize() {
//     let sliderContainerOut = sliderContainer.getBoundingClientRect();
//     let sliderIn = slider.getBoundingClientRect();

//     if (parseInt(slider.style.left) > 0) {
//         slider.style.left = `0px`;
//     } else if (sliderIn.right < sliderContainerOut.right) {
//         slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
//     }
// }








// STORY
// const clickBtn = document.querySelectorAll('.b-hero__footer-link');
// const body = document.querySelector('body');

// clickBtn.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault();

//         const wrp = document.createElement('div');

//         wrp.innerHTML = `
//         <section class="str-main">
//             <div class="container">
//                 <h3 class="str-main__title">PETRO AND THE FLEA KING</h3>
//                 <ul class="str-main__list">
//                     <li class="str-main__item">
//                         <div class="str-main__content">
//                             <img class="str-main__img mr1" src="img/welcomeToBed/str-petro-1.png">
//                             <p class="str-main__text">From an award-winning children's book author and illustrator comes a graphic novel full of whimsy, tradition, and fun for all ages. illustration shows a fantastical world of adventure that goes beyond words. Get this book and enjoy
//                                 the whirl-wind adventur. SuperBookDeals.com is your top source for finding new books at the absolute lowest prices, guaranteed ! We offer big discounts - everyday - on millions of titles in virtually any category, from Architecture
//                                 to Zoology -- and everything in between. </p>
//                         </div>
//                     </li>
//                     <li class="str-main__item">
//                         <div class="str-main__content">
//                             <p class="str-main__text">the newest computer guides, or your favorite fiction authors. You'll find it all - at HUGE SAVINGS - at SuperBookDeals. Browse through our complete online product catalog today. Serving customers around the world for years, we
//                                 help thousands find just the books they're looking for -- at incredibly low, bargain prices.From an award-winning children's book author and illustrator comes a graphic novel full of whimsy, tradition, and fun for all ages.
//                                 illustration shows a fantastical world of adventure that goes beyond...</p>
//                             <img class="str-main__img ml1" src="img/welcomeToBed/str-petro-2.png">
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </section>
//         `;

//         body.append(wrp);
//     });
// });











// SELECTOR
const selectorParent = document.querySelector('.selector');
const selectorBtns = document.querySelectorAll('.selector-rnd');
const selectorContents = document.querySelectorAll('.b-hero__footer');


function hideContent() {
    selectorContents.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    selectorBtns.forEach((item) => {
        item.classList.remove('bold-active');
    });
}

function showContent(i = 0) {
    selectorContents[i].classList.add('show');
    selectorContents[i].classList.remove('hide');
    selectorBtns[i].classList.add('bold-active');
}

hideContent();
showContent(1);


selectorParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('selector-rnd')) {
        selectorBtns.forEach((item, i) => {
            if (item == target) {
                hideContent();
                showContent(i);
            }
        });
    }
});
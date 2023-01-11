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
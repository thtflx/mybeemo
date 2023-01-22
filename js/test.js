// CHOOSE STORY
// 5th try.
const wrapperTab = document.querySelector('.history-all');
const tabItems = document.querySelectorAll('.history__item');
const tabContents = document.querySelectorAll('.history-tab');


function hideConten() {
    tabContents.forEach((content) => {
        content.classList.add('hide');
        content.classList.remove('show');
    });

    tabItems.forEach((item) => {
        item.classList.remove('aktiv');
    });
}

hideConten();



function showConen(i = 0) {
    tabContents[i].classList.add('show');
    tabContents[i].classList.remove('hide');
    tabItems[i].classList.add('aktiv');
}

showConen();


wrapperTab.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('history__item')) {
        tabItems.forEach((item, i) => {
            if (item == event.target) {
                hideConten();
                showConen(i);
            }
        });
    }

});
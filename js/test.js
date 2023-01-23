window.addEventListener('DOMContentLoaded', () => {
    // CHOOSE STORY
    // 5th try.
    const wrapperTab = document.querySelector('.history');
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




    // LANGUAGE
    const uzBtn = document.querySelector('#uz');
    const ruBtn = document.querySelector('#ru');
    const engBtn = document.querySelector('#eng');

    const bHeader = document.querySelector('.b-header__title');
    const titil = document.querySelector('.hstr-title');


    const petroTitle = document.querySelector('#petro-title');
    const petroText1 = document.querySelector('#petro-text-1');
    const petroText2 = document.querySelector('#petro-text-2');

    uzBtn.addEventListener('click', () => {
        bHeader.innerText = `YAXSHI YOTIB TUR, JONIM!`;
        petroTitle.innerText = `PETRO VA TARAKANLAR QIROLI`;
        petroText1.innerText = `Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.`;
        petroText2.innerText = `Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.`;
    });
});
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


            // PLAY AUDIO
            const audioPlayBtn = document.querySelector('#playAudio');
            audioPlayBtn.addEventListener('click', (e) => {
                e.preventDefault();
                var audio = new Audio('audio/polog.mp3');
                audio.play();
            });




            // LANGUEO
            const langEl = document.querySelector('.language-container');
            const buttons = document.querySelectorAll('button');

            // PETRO
            const petroTitle = document.querySelector('#petro-title');
            const petroText1 = document.querySelector('#petro-text-1');
            const petroText2 = document.querySelector('#petro-text-2');

            // LITTLE
            const littleTitle = document.querySelector('#little-title');
            const littleText1 = document.querySelector('#little-text-1');
            const littleText2 = document.querySelector('#little-text-2');

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const attr = btn.getAttribute('language');

                    // petro
                    petroTitle.textContent = data[attr].petrotitle;
                    petroText1.textContent = data[attr].petrotext1;
                    petroText2.textContent = data[attr].petrotext2;

                    // little
                    littleTitle.textContent = data[attr].littletitle;
                    littleText1.textContent = data[attr].littletext1;
                    littleText2.textContent = data[attr].littletext2;
                });
            });



            // LANGUAGE
            //     const uzBtn = document.querySelector('#uz');
            //     const ruBtn = document.querySelector('#ru');
            //     const engBtn = document.querySelector('#eng');

            //     const bHeader = document.querySelector('.b-header__title');
            //     const titil = document.querySelector('.hstr-title');


            //     const petroTitle = document.querySelector('#petro-title');
            //     const petroText1 = document.querySelector('#petro-text-1');
            //     const petroText2 = document.querySelector('#petro-text-2');

            //     uzBtn.addEventListener('click', () => {
            //         bHeader.innerText = `YAXSHI YOTIB TUR, JONIM!`;
            //         petroTitle.innerText = `PETRO VA TARAKANLAR QIROLI`;
            //         petroText1.innerText = `Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.`;
            //         petroText2.innerText = `Kitob mahsulotlarining xarakteristikalari, yetkazib berish shartlari, tashqi ko'rinishi va rangi haqidagi ma'lumotlar faqat ma'lumot uchun mo'ljallangan va joylashtirilgan paytda mavjud bo'lgan eng so'nggi ma'lumotlarga asoslanadi.`;
            //     });
            // });
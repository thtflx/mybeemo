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

            // ALISA
            const alisaTitle = document.querySelector('#alisa-title');
            const alisaText1 = document.querySelector('#alisa-text-1');
            const alisaText2 = document.querySelector('#alisa-text-2');

            // ORIGAMIB
            const origamibTitle = document.querySelector('#origamib-title');
            const origamibText1 = document.querySelector('#origamib-text-1');
            const origamibText2 = document.querySelector('#origamib-text-2');
            const origamibText3 = document.querySelector('#origamib-text-3');
            const origamibText4 = document.querySelector('#origamib-text-4');
            const origamibText5 = document.querySelector('#origamib-text-5');
            // const origamibText6 = document.querySelector('#origamib-text-6');
            // const origamibText7 = document.querySelector('#origamib-text-7');
            // const origamibText8 = document.querySelector('#origamib-text-8');
            // const origamibText9 = document.querySelector('#origamib-text-9');
            // const origamibText10 = document.querySelector('#origamib-text-10');
            // const origamibText11 = document.querySelector('#origamib-text-11');
            // const origamibText12 = document.querySelector('#origamib-text-12');
            // const origamibText13 = document.querySelector('#origamib-text-13');
            // const origamibText14 = document.querySelector('#origamib-text-14');
            // const origamibText15 = document.querySelector('#origamib-text-15');
            // const origamibText16 = document.querySelector('#origamib-text-16');
            // const origamibText17 = document.querySelector('#origamib-text-17');
            // const origamibText18 = document.querySelector('#origamib-text-18');
            // const origamibText19 = document.querySelector('#origamib-text-19');
            // const origamibText20 = document.querySelector('#origamib-text-20');
            // const origamibText21 = document.querySelector('#origamib-text-21');
            // const origamibText22 = document.querySelector('#origamib-text-22');

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

                    // alisa
                    alisaTitle.textContent = data[attr].alisatitle;
                    alisaText1.textContent = data[attr].alisatext1;
                    alisaText2.textContent = data[attr].alisatext2;

                    // origamib
                    origamibTitle.textContent = data[attr].origamibtitle;
                    origamibText1.textContent = data[attr].origamibtext1;
                    origamibText2.textContent = data[attr].origamibtext2;
                    origamibText3.textContent = data[attr].origamibtext3;
                    origamibText4.textContent = data[attr].origamibtext4;
                    origamibText5.textContent = data[attr].origamibtext5;
                    // origamibText6.textContent = data[attr].origamibtext6;
                    // origamibText7.textContent = data[attr].origamibtext7;
                    // origamibText8.textContent = data[attr].origamibtext8;
                    // origamibText9.textContent = data[attr].origamibtext9;
                    // origamibText10.textContent = data[attr].origamibtext10;
                    // origamibText11.textContent = data[attr].origamibtext11;
                    // origamibText12.textContent = data[attr].origamibtext12;
                    // origamibText13.textContent = data[attr].origamibtext13;
                    // origamibText14.textContent = data[attr].origamibtext14;
                    // origamibText15.textContent = data[attr].origamibtext15;
                    // origamibText16.textContent = data[attr].origamibtext16;
                    // origamibText17.textContent = data[attr].origamibtext17;
                    // origamibText18.textContent = data[attr].origamibtext18;
                    // origamibText19.textContent = data[attr].origamibtext19;
                    // origamibText20.textContent = data[attr].origamibtext20;
                    // origamibText21.textContent = data[attr].origamibtext21;
                    // origamibText22.textContent = data[attr].origamibtext22;
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
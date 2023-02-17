            // CH
            const chParent = document.querySelector('.ch-parent');
            const chItems = document.querySelectorAll('.ch-item');
            const chContent = document.querySelectorAll('.toons__list');


            function hideChTabContent() {
                chContent.forEach((item) => {
                    item.classList.add('hide');
                    item.classList.remove('chshow');
                })

                chItems.forEach((item) => {
                    item.classList.remove('chaktiv');
                });
            }

            function showChTabContent(i = 0) {
                chContent[i].classList.add('chshow');
                chContent[i].classList.remove('hide');
                chItems[i].classList.add('chaktiv');
            }

            hideChTabContent();
            showChTabContent();

            chParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target && target.classList.contains('ch-item')) {
                    chItems.forEach((item, idx) => {
                        if (target == item) {
                            hideChTabContent();
                            showChTabContent(idx);
                        }
                    });
                }
            });


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
            const origamibText6 = document.querySelector('#origamib-text-6');
            const origamibText7 = document.querySelector('#origamib-text-7');
            const origamibText8 = document.querySelector('#origamib-text-8');
            const origamibText9 = document.querySelector('#origamib-text-9');
            const origamibText10 = document.querySelector('#origamib-text-10');

            // TUGBUG
            const tigbugTitle = document.querySelector('#tigbug-title');
            const tigbugText1 = document.querySelector('#tigbug-text-1');
            const tigbugText2 = document.querySelector('#tigbug-text-2');
            const tigbugText3 = document.querySelector('#tigbug-text-3');
            const tigbugText4 = document.querySelector('#tigbug-text-4');
            const tigbugText5 = document.querySelector('#tigbug-text-5');
            const tigbugText6 = document.querySelector('#tigbug-text-6');
            const tigbugText7 = document.querySelector('#tigbug-text-7');
            const tigbugText8 = document.querySelector('#tigbug-text-8');
            const tigbugText9 = document.querySelector('#tigbug-text-9');
            const tigbugText10 = document.querySelector('#tigbug-text-10');
            const tigbugText11 = document.querySelector('#tigbug-text-11');
            const tigbugText12 = document.querySelector('#tigbug-text-12');
            const tigbugText13 = document.querySelector('#tigbug-text-13');
            const tigbugText14 = document.querySelector('#tigbug-text-14');

            // MNK
            const mnkTitle = document.querySelector('#mnk-title');
            const mnkText1 = document.querySelector('#mnk-text-1');
            const mnkText2 = document.querySelector('#mnk-text-2');
            const mnkText3 = document.querySelector('#mnk-text-3');
            const mnkText4 = document.querySelector('#mnk-text-4');
            const mnkText5 = document.querySelector('#mnk-text-5');
            const mnkText6 = document.querySelector('#mnk-text-6');
            const mnkText7 = document.querySelector('#mnk-text-7');
            const mnkText8 = document.querySelector('#mnk-text-8');
            const mnkText9 = document.querySelector('#mnk-text-9');
            const mnkText10 = document.querySelector('#mnk-text-10');
            const mnkText11 = document.querySelector('#mnk-text-11');
            const mnkText12 = document.querySelector('#mnk-text-12');
            const mnkText13 = document.querySelector('#mnk-text-13');
            const mnkText14 = document.querySelector('#mnk-text-14');
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
                    origamibText6.textContent = data[attr].origamibtext6;
                    origamibText7.textContent = data[attr].origamibtext7;
                    origamibText8.textContent = data[attr].origamibtext8;
                    origamibText9.textContent = data[attr].origamibtext9;
                    origamibText10.textContent = data[attr].origamibtext10;

                    // tigbug
                    tigbugTitle.textContent = data[attr].tigbugtitle;
                    tigbugText1.textContent = data[attr].tigbugtext1;
                    tigbugText2.textContent = data[attr].tigbugtext2;
                    tigbugText3.textContent = data[attr].tigbugtext3;
                    tigbugText4.textContent = data[attr].tigbugtext4;
                    tigbugText5.textContent = data[attr].tigbugtext5;
                    tigbugText6.textContent = data[attr].tigbugtext6;
                    tigbugText7.textContent = data[attr].tigbugtext7;
                    tigbugText8.textContent = data[attr].tigbugtext8;
                    tigbugText9.textContent = data[attr].tigbugtext9;
                    tigbugText10.textContent = data[attr].tigbugtext10;
                    tigbugText11.textContent = data[attr].tigbugtext11;
                    tigbugText12.textContent = data[attr].tigbugtext12;
                    tigbugText13.textContent = data[attr].tigbugtext13;
                    tigbugText14.textContent = data[attr].tigbugtext14;
                });
            });
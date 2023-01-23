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
            const link = document.querySelectorAll('button');
            const titleEl = document.querySelector('.hstr-title');
            const petroTitle = document.querySelector('#petro-title');
            const petroText = document.querySelector('#petro-text-1');
            const descrEl = document.querySelector('.hstr-context-1-text');

            link.forEach(el => {
                el.addEventListener('click', () => {
                    const attr = el.getAttribute('language');

                    titleEl.textContent = data[attr].title;
                    descrEl.textContent = data[attr].description;
                    petroTitle.textContent = data[attr].petrotitle;
                    petroText.textContent = data[attr].petrotext;
                });
            });

            // var data = {
            //     "uzbek": {
            //         "title": "O'zbek!",
            //         "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",
            //         "petrotitle": "O'zbek Petro",
            //         "petrotext": "Salom men Petro va unga yarash ish qilishinga to'gri kelib qoldi"
            //     },
            //     "russian": {
            //         "title": "Русский!",
            //         "description": "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға.",
            //         "petrotitle": "Рус Петро",
            //         "petrotext": "Привет, меня зовут Петро и я капуэро!"
            //     },
            //     "english": {
            //         "title": "English!",
            //         "description": "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。.",
            //         "petrotitle": "English Petro",
            //         "petrotext": "Hi, i'm cool Petro and i'm to a capuero!"
            //     }
            // }



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
// const playBtn = document.querySelector('#play');
// const audio = document.querySelector('#audio');

// const songs = [
//     'Спят_усталые_игрушки,_книжки_спят.mp3'
// ];


// let songIndex = 0;


// loadSong(songs[songIndex]);


// function loadSong(song) {
//     audio.src = `audio/${song}.mp3`;
// }


// function playSong() {
//     audio.play();
// }

// playBtn.addEventListener('click', () => {
//     playSong();
// });


// !
// const songs = [
//     'Спят_усталые_игрушки,_книжки_спят.mp3'
// ];


// let songIndex = 0;


// loadSong(songs[songIndex]);


// function loadSong(song) {
//     title.innerHTML = song;
//     cover.src = `img/${song}.jpg`;
//     audio.src = `audio/${song}.mp3`;
// }


// function playSong() {
//     musicContainer.classlist.add('play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');

//     audio.play();
// }


// function pauseSong() {
//     musicContainer.classlist.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');

//     audio.pause();
// }


// function prevSong() {
//     songIndex--;

//     if (songIndex < 0) {
//         songIndex = songs.length - 1;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// function nextSong() {
//     songIndex++;

//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }

//     loadSong(songs[songIndex]);

//     playSong();
// }


// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });


// nextBtn.addEventListener('click', nextSong);
// prevBtn.addEventListener('click', prevSong);






// // beginning
// const audioPlayer = document.querySelector(".audio-player");
// const audio = new Audio(
//     "/audio/Спят_усталые_игрушки,_книжки_спят.mp3"
// );

// console.dir(audio);

// audio.addEventListener(
//     "loadeddata",
//     () => {
//         audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
//             audio.duration
//         );
//         audio.volume = .75;
//     },
//     false
// );

// //click on timeline to skip around
// const timeline = audioPlayer.querySelector(".timeline");
// timeline.addEventListener("click", e => {
//     const timelineWidth = window.getComputedStyle(timeline).width;
//     const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
//     audio.currentTime = timeToSeek;
// }, false);

// //click volume slider to change volume
// const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
// volumeSlider.addEventListener('click', e => {
//     const sliderWidth = window.getComputedStyle(volumeSlider).width;
//     const newVolume = e.offsetX / parseInt(sliderWidth);
//     audio.volume = newVolume;
//     audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
// }, false)

// //check audio percentage and update time accordingly
// setInterval(() => {
//     const progressBar = audioPlayer.querySelector(".progress");
//     progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
//     audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
//         audio.currentTime
//     );
// }, 500);

// //toggle between playing and pausing on button click
// const playBtn = audioPlayer.querySelector(".controls .toggle-play");
// playBtn.addEventListener("click", () => {
//         if (audio.paused) {
//             playBtn.classList.remove("play");
//             playBtn.classList.add("pause");
//             audio.play();
//         } else {
//             playBtn.classList.remove("pause");
//             playBtn.classList.add("play");
//             audio.pause();
//         }
//     },
//     false
// );

// audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
//     const volumeEl = audioPlayer.querySelector(".volume-container .volume");
//     audio.muted = !audio.muted;
//     if (audio.muted) {
//         volumeEl.classList.remove("icono-volumeMedium");
//         volumeEl.classList.add("icono-volumeMute");
//     } else {
//         volumeEl.classList.add("icono-volumeMedium");
//         volumeEl.classList.remove("icono-volumeMute");
//     }
// });

// //turn 128 seconds into 2:08
// function getTimeCodeFromNum(num) {
//     let seconds = parseInt(num);
//     let minutes = parseInt(seconds / 60);
//     seconds -= minutes * 60;
//     const hours = parseInt(minutes / 60);
//     minutes -= hours * 60;

//     if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
//     return `${String(hours).padStart(2, 0)}:${minutes}:${String(
//     seconds % 60
//   ).padStart(2, 0)}`;
// }





// !CLASS
// class AmbCard {
//     constructor(src, alt, title, text, parentSelector, ...classes) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.text = text;
//         this.classes = classes;
//         this.parent = document.querySelector(parentSelector);
//     }


//     pass() {
//         const element = document.createElement('div');

//         if (this.classes.length === 0) {
//             this.element = 'amb__item';
//             element.classList.add(this.element);
//         } else {
//             this.classes.forEach((classname) => {
//                 element.classList.add(classname);
//             });
//         }

//         this.classes.forEach((classname) => {
//             element.classList.add(classname);
//         });

//         element.innerHTML = `
//             <img class="amb__img" src="${this.src}" alt="${this.alt}">
//             <div class="amb__content">
//                 <h3 class="amb__content-title">${this.title}</h3>
//                 <p class="amb__content-text">${this.text}</p>
//             </div>
//             <button id="play" class="amb__link">
//                 <i class="fas fa-play"></i>
//             </button>
//         `;

//         this.parent.append(element);
//     }
// }


// new AmbCard(
//     `img/welcomeToBed/amb-icon.png`,
//     `fir`,
//     `Баю-бай`,
//     `Sleep | Peace | Meditation`,
//     `.amb .amb__list`,
//     `amb__item`
// ).pass();

// new AmbCard(
//     `img/welcomeToBed/amb-icon.png`,
//     `sec`,
//     `The cyber garden`,
//     `Synth | Space | Meditation`,
//     `.amb .amb__list`,
//     `amb__item`
// ).pass();

// new AmbCard(
//     `img/welcomeToBed/amb-icon.png`,
//     `thi`,
//     `The cyber garden`,
//     `Synth | Space | Meditation`,
//     `.amb .amb__list`,
//     `amb__item`
// ).pass();

// new AmbCard(
//     `img/welcomeToBed/amb-icon.png`,
//     `fou`,
//     `The cyber garden`,
//     `Synth | Space | Meditation`,
//     `.amb .amb__list`,
//     `amb__item`
// ).pass();

// new AmbCard(
//     `img/welcomeToBed/amb-icon.png`,
//     `fif`,
//     `The cyber garden`,
//     `Synth | Space | Meditation`,
//     `.amb .amb__list`,
//     `amb__item`
// ).pass();





// function playMusic(){
//     var music = new Audio('musicfile.mp3');
//     music.play();
//     }
{ /* <input type="button" value="sound" onclick="playMusic()" /> */ }



// const audio = new Audio(`audio/Спят_усталые_игрушки,_книжки_спят.mp3`);
// const play = document.querySelector('#play');
// const stop = document.querySelector('#stop');

// function playAudio() {
//     play.addEventListener('click', () => {
//         audio.play();
//     });
// }
// playAudio();

// function pauseAudio() {
//     stop.addEventListener('click', () => {
//         audio.pause();
//     });
// }
// pauseAudio();










// const audio = new Audio(`audio/Спят_усталые_игрушки,_книжки_спят.mp3`);
// const musicContainer = document.querySelector('.amb__item');
// const playBtn = document.querySelector('#play');

// function playSong() {
//     musicContainer.classList.add('play')
//     playBtn.querySelector('i.fas').classList.remove('fa-play')
//     playBtn.querySelector('i.fas').classList.add('fa-pause')

//     audio.play();
// }

// function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play')
//     playBtn.querySelector('i.fas').classList.remove('fa-pause')

//     audio.pause();
// }



// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');
//     if (isPlaying) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// })


// fix.
// const infoLink = document.querySelector('.toons__header__content-icon');
// const infoBtn = document.querySelector('.info-wrapp');

// infoLink.addEventListener('click', () => {
//     infoBtn.classList.toggle('hide');
// });


// VIDEO-PLAYLIST
const listVideo = document.querySelectorAll('.video-list .vid');
const mainVideo = document.querySelector('.main-video video');
const title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach((vid) => {
            vid.classList.remove('act');
        });
        video.classList.add('act');
        if (video.classList.contains('act')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});



// modal
const btnn = document.querySelector('.toons__header__content-link');
const closeIcons = document.querySelectorAll('.close-icon');
const inf = document.querySelector('.inf');


btnn.addEventListener('click', () => {
    inf.classList.remove('active');
});

closeIcons.forEach((item) => {
    item.addEventListener('click', () => {
        inf.classList.add('active');
    });
})





// AUDIO-PLAYER
// Multiple events to a listener
function addEventListener_multi(element, eventNames, handler) {
    var events = eventNames.split(' ');
    events.forEach(e => element.addEventListener(e, handler, false));
}

// Random numbers in a specific range
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Position element inside element
function getRelativePos(elm) {
    var pPos = elm.parentNode.getBoundingClientRect(); // parent pos
    var cPos = elm.getBoundingClientRect(); // target pos
    var pos = {};

    pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop,
        pos.right = cPos.right - pPos.right,
        pos.bottom = cPos.bottom - pPos.bottom,
        pos.left = cPos.left - pPos.left;

    return pos;
}

function formatTime(val) {
    var h = 0,
        m = 0,
        s;
    val = parseInt(val, 10);
    if (val > 60 * 60) {
        h = parseInt(val / (60 * 60), 10);
        val -= h * 60 * 60;
    }
    if (val > 60) {
        m = parseInt(val / 60, 10);
        val -= m * 60;
    }
    s = val;
    val = (h > 0) ? h + ':' : '';
    val += (m > 0) ? ((m < 10 && h > 0) ? '0' : '') + m + ':' : '0:';
    val += ((s < 10) ? '0' : '') + s;
    return val;
}

function simp_initTime() {
    simp_controls.querySelector('.start-time').innerHTML = formatTime(simp_audio.currentTime); //calculate current value time
    if (!simp_isStream) {
        simp_controls.querySelector('.end-time').innerHTML = formatTime(simp_audio.duration); //calculate total value time
        simp_progress.value = simp_audio.currentTime / simp_audio.duration * 100; //progress bar
    }

    // ended of the audio
    if (simp_audio.currentTime == simp_audio.duration) {
        simp_controls.querySelector('.simp-plause').classList.remove('fa-pause');
        simp_controls.querySelector('.simp-plause').classList.add('fa-play');
        simp_audio.removeEventListener('timeupdate', simp_initTime);

        if (simp_isNext) { //auto load next audio
            var elem;
            simp_a_index++;
            if (simp_a_index == simp_a_url.length) { //repeat all audio
                simp_a_index = 0;
                elem = simp_a_url[0];
            } else {
                elem = simp_a_url[simp_a_index];
            }
            simp_changeAudio(elem);
            simp_setAlbum(simp_a_index);
        } else {
            simp_isPlaying = false;
        }
    }
}

function simp_initAudio() {
    // if readyState more than 2, audio file has loaded
    simp_isLoaded = simp_audio.readyState == 4 ? true : false;
    simp_isStream = simp_audio.duration == 'Infinity' ? true : false;
    simp_controls.querySelector('.simp-plause').disabled = false;
    simp_progress.disabled = simp_isStream ? true : false;
    if (!simp_isStream) {
        simp_progress.parentNode.classList.remove('simp-load', 'simp-loading');
        simp_controls.querySelector('.end-time').innerHTML = formatTime(simp_audio.duration);
    }
    simp_audio.addEventListener('timeupdate', simp_initTime); //tracking load progress
    if (simp_isLoaded && simp_isPlaying) simp_audio.play();

    // progress bar click event
    addEventListener_multi(simp_progress, 'touchstart mousedown', function(e) {
        if (simp_isStream) {
            e.stopPropagation();
            return false;
        }
        if (simp_audio.readyState == 4) {
            simp_audio.removeEventListener('timeupdate', simp_initTime);
            simp_audio.pause();
        }
    });

    addEventListener_multi(simp_progress, 'touchend mouseup', function(e) {
        if (simp_isStream) {
            e.stopPropagation();
            return false;
        }
        if (simp_audio.readyState == 4) {
            simp_audio.currentTime = simp_progress.value * simp_audio.duration / 100;
            simp_audio.addEventListener('timeupdate', simp_initTime);
            if (simp_isPlaying) simp_audio.play();
        }
    });
}

function simp_loadAudio(elem) {
    simp_progress.parentNode.classList.add('simp-loading');
    simp_controls.querySelector('.simp-plause').disabled = true;
    simp_audio.querySelector('source').src = elem.dataset.src;
    simp_audio.load();

    simp_audio.volume = parseFloat(simp_v_num / 100); //based on valume input value
    simp_audio.addEventListener('canplaythrough', simp_initAudio); //play audio without stop for buffering

    // if audio fails to load, only IE/Edge 9.0 or above
    simp_audio.addEventListener('error', function() {
        alert('Please reload the page.');
    });
}

function simp_setAlbum(index) {
    simp_cover.innerHTML = simp_a_url[index].dataset.cover ? '<div style="background:url(' + simp_a_url[index].dataset.cover + ') no-repeat;background-size:cover;border-radius:20px;border: 2px solid rgb(11, 11, 165);width:84px;height:84px;"></div>' : '<i class="fa fa-music fa-5x"></i>';
    simp_title.innerHTML = simp_source[index].querySelector('.simp-source').innerHTML;
    simp_artist.innerHTML = simp_source[index].querySelector('.simp-desc') ? simp_source[index].querySelector('.simp-desc').innerHTML : '';
}

function simp_changeAudio(elem) {
    simp_isLoaded = false;
    simp_controls.querySelector('.simp-prev').disabled = simp_a_index == 0 ? true : false;
    simp_controls.querySelector('.simp-plause').disabled = simp_auto_load ? true : false;
    simp_controls.querySelector('.simp-next').disabled = simp_a_index == simp_a_url.length - 1 ? true : false;
    simp_progress.parentNode.classList.add('simp-load');
    simp_progress.disabled = true;
    simp_progress.value = 0;
    simp_controls.querySelector('.start-time').innerHTML = '00:00';
    simp_controls.querySelector('.end-time').innerHTML = '00:00';
    elem = simp_isRandom && simp_isNext ? simp_a_url[getRandom(0, simp_a_url.length - 1)] : elem;

    // playlist, audio is running
    for (var i = 0; i < simp_a_url.length; i++) {
        simp_a_url[i].parentNode.classList.remove('simp-active');
        if (simp_a_url[i] == elem) {
            simp_a_index = i;
            simp_a_url[i].parentNode.classList.add('simp-active');
        }
    }

    // scrolling to element inside element
    var simp_active = getRelativePos(simp_source[simp_a_index]);
    simp_source[simp_a_index].parentNode.scrollTop = simp_active.top;

    if (simp_auto_load || simp_isPlaying) simp_loadAudio(elem);

    if (simp_isPlaying) {
        simp_controls.querySelector('.simp-plause').classList.remove('fa-play');
        simp_controls.querySelector('.simp-plause').classList.add('fa-pause');
    }
}

function simp_startScript() {
    ap_simp = document.querySelector('#simp');
    simp_audio = ap_simp.querySelector('#audio');
    simp_album = ap_simp.querySelector('.simp-album');
    simp_cover = simp_album.querySelector('.simp-cover');
    simp_title = simp_album.querySelector('.simp-title');
    simp_artist = simp_album.querySelector('.simp-artist');
    simp_controls = ap_simp.querySelector('.simp-controls');
    simp_progress = simp_controls.querySelector('.simp-progress');
    simp_volume = simp_controls.querySelector('.simp-volume');
    simp_v_slider = simp_volume.querySelector('.simp-v-slider');
    simp_v_num = simp_v_slider.value; //default volume
    simp_others = simp_controls.querySelector('.simp-others');
    simp_auto_load = simp_config.auto_load; //auto load audio file

    if (simp_config.shide_top) simp_album.parentNode.classList.toggle('simp-hide');
    if (simp_config.shide_btm) {
        simp_playlist.classList.add('simp-display');
        simp_playlist.classList.toggle('simp-hide');
    }

    if (simp_a_url.length <= 1) {
        simp_controls.querySelector('.simp-prev').style.display = 'none';
        simp_controls.querySelector('.simp-next').style.display = 'none';
        simp_others.querySelector('.simp-plext').style.display = 'none';
        simp_others.querySelector('.simp-random').style.display = 'none';
    }

    // Playlist listeners
    simp_source.forEach(function(item, index) {
        if (item.classList.contains('simp-active')) simp_a_index = index; //playlist contains '.simp-active'
        item.addEventListener('click', function() {
            simp_audio.removeEventListener('timeupdate', simp_initTime);
            simp_a_index = index;
            simp_changeAudio(this.querySelector('.simp-source'));
            simp_setAlbum(simp_a_index);
        });
    });

    // FIRST AUDIO LOAD =======
    simp_changeAudio(simp_a_url[simp_a_index]);
    simp_setAlbum(simp_a_index);
    // FIRST AUDIO LOAD =======

    // Controls listeners
    simp_controls.querySelector('.simp-plauseward').addEventListener('click', function(e) {
        var eles = e.target.classList;
        if (eles.contains('simp-plause')) {
            if (simp_audio.paused) {
                if (!simp_isLoaded) simp_loadAudio(simp_a_url[simp_a_index]);
                simp_audio.play();
                simp_isPlaying = true;
                eles.remove('fa-play');
                eles.add('fa-pause');
            } else {
                simp_audio.pause();
                simp_isPlaying = false;
                eles.remove('fa-pause');
                eles.add('fa-play');
            }
        } else {
            if (eles.contains('simp-prev') && simp_a_index != 0) {
                simp_a_index = simp_a_index - 1;
                e.target.disabled = simp_a_index == 0 ? true : false;
            } else if (eles.contains('simp-next') && simp_a_index != simp_a_url.length - 1) {
                simp_a_index = simp_a_index + 1;
                e.target.disabled = simp_a_index == simp_a_url.length - 1 ? true : false;
            }
            simp_audio.removeEventListener('timeupdate', simp_initTime);
            simp_changeAudio(simp_a_url[simp_a_index]);
            simp_setAlbum(simp_a_index);
        }
    });

    // Audio volume
    simp_volume.addEventListener('click', function(e) {
        var eles = e.target.classList;
        if (eles.contains('simp-mute')) {
            if (eles.contains('fa-volume-up')) {
                eles.remove('fa-volume-up');
                eles.add('fa-volume-off');
                simp_v_slider.value = 0;
            } else {
                eles.remove('fa-volume-off');
                eles.add('fa-volume-up');
                simp_v_slider.value = simp_v_num;
            }
        } else {
            simp_v_num = simp_v_slider.value;
            if (simp_v_num != 0) {
                simp_controls.querySelector('.simp-mute').classList.remove('fa-volume-off');
                simp_controls.querySelector('.simp-mute').classList.add('fa-volume-up');
            }
        }
        simp_audio.volume = parseFloat(simp_v_slider.value / 100);
    });

    // Others
    simp_others.addEventListener('click', function(e) {
        var eles = e.target.classList;
        if (eles.contains('simp-plext')) {
            simp_isNext = simp_isNext && !simp_isRandom ? false : true;
            if (!simp_isRandom) simp_isRanext = simp_isRanext ? false : true;
            eles.contains('simp-active') && !simp_isRandom ? eles.remove('simp-active') : eles.add('simp-active');
        } else if (eles.contains('simp-random')) {
            simp_isRandom = simp_isRandom ? false : true;
            if (simp_isNext && !simp_isRanext) {
                simp_isNext = false;
                simp_others.querySelector('.simp-plext').classList.remove('simp-active');
            } else {
                simp_isNext = true;
                simp_others.querySelector('.simp-plext').classList.add('simp-active');
            }
            eles.contains('simp-active') ? eles.remove('simp-active') : eles.add('simp-active');
        } else if (eles.contains('simp-shide-top')) {
            simp_album.parentNode.classList.toggle('simp-hide');
        } else if (eles.contains('simp-shide-bottom')) {
            simp_playlist.classList.add('simp-display');
            simp_playlist.classList.toggle('simp-hide');
        }
    });
}

// Start simple player
if (document.querySelector('#simp')) {
    var simp_auto_load, simp_audio, simp_album, simp_cover, simp_title, simp_artist, simp_controls, simp_progress, simp_volume, simp_v_slider, simp_v_num, simp_others;
    var ap_simp = document.querySelector('#simp');
    var simp_playlist = ap_simp.querySelector('.simp-playlist');
    var simp_source = simp_playlist.querySelectorAll('li');
    var simp_a_url = simp_playlist.querySelectorAll('[data-src]');
    var simp_a_index = 0;
    var simp_isPlaying = false;
    var simp_isNext = false; //auto play
    var simp_isRandom = false; //play random
    var simp_isRanext = false; //check if before random starts, simp_isNext value is true
    var simp_isStream = false; //radio streaming
    var simp_isLoaded = false; //audio file has loaded
    var simp_config = ap_simp.dataset.config ? JSON.parse(ap_simp.dataset.config) : {
        shide_top: false, //show/hide album
        shide_btm: false, //show/hide playlist
        auto_load: false //auto load audio file
    };

    var simp_elem = '';
    simp_elem += '<audio id="audio" preload><source src="" type="audio/mpeg"></audio>';
    simp_elem += '<div class="simp-display"><div class="simp-album w-full flex-wrap"><div class="simp-cover"><i class="fa fa-music fa-5x"></i></div><div class="simp-info"><div class="simp-title">Title</div><div class="simp-artist">Artist</div></div></div></div>';
    simp_elem += '<div class="simp-controls flex-wrap flex-align">';
    simp_elem += '<div class="simp-plauseward flex flex-align"><button type="button" class="simp-prev fa fa-backward" disabled></button><button type="button" class="simp-plause fa fa-play" disabled></button><button type="button" class="simp-next fa fa-forward" disabled></button></div>';
    simp_elem += '<div class="simp-tracker simp-load"><input class="simp-progress" type="range" min="0" max="100" value="0" disabled/><div class="simp-buffer"></div></div>';
    simp_elem += '<div class="simp-time flex flex-align"><span class="start-time">00:00</span><span class="simp-slash">&#160;/&#160;</span><span class="end-time">00:00</span></div>';
    simp_elem += '<div class="simp-volume flex flex-align"><button type="button" class="simp-mute fa fa-volume-up"></button><input class="simp-v-slider" type="range" min="0" max="100" value="100"/></div>';
    simp_elem += '<div class="simp-others flex flex-align"><button type="button" class="simp-plext fa fa-play-circle" title="Auto Play"></button><button type="button" class="simp-random fa fa-random" title="Random"></button><div class="simp-shide"><button type="button" class="simp-shide-top fa fa-caret-up" title="Show/Hide Album"></button><button type="button" class="simp-shide-bottom fa fa-caret-down" title="Show/Hide Playlist"></button></div></div>';
    simp_elem += '</div>'; //simp-controls

    var simp_player = document.createElement('div');
    simp_player.classList.add('simp-player');
    simp_player.innerHTML = simp_elem;
    ap_simp.insertBefore(simp_player, simp_playlist);
    simp_startScript();
}







// // VIDEO
// const btn = document.querySelector('.toon__play-link');
// const closeIcon = document.querySelector('.close-icon');
// const toonContainer = document.querySelector('.toon-container');


// btn.addEventListener('click', () => {
//     toonContainer.classList.remove('active');
// });

// closeIcon.addEventListener('click', () => {
//     toonContainer.classList.add('active');
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
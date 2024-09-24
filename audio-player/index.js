let isPlay = false;
let playNum = 0;
let playList = [
  "./assets/audio/Cheek_to_Cheek.mp3",
  "./assets/audio/Go_Down_Moses.mp3",
  "./assets/audio/What_A_Wonderful_World.mp3",
  "./assets/audio/beyonce (1).mp3",
  "./assets/audio/dontstartnow.mp3",
];
let coverList = [
  "./assets/images/cheek-to-cheek.png",
  "./assets/images/go_down.png",
  "./assets/images/wonderfull_world.png",
  "./assets/images/lemonade.png",
  "./assets/images/dontstartnow.png",
];
let singerList = [
  "Louis Armstrong",
  "Louis Armstrong",
  "Louis Armstrong",
  "Beyonce",
  "Dua Lipa",
];
let titleList = [
  "Cheek to Cheek",
  "Go Down Moses",
  "A Wonderful World",
  "Don't hurt yourself",
  "Don't stop now",
];

const audio = document.querySelector("audio");
const playButton = document.querySelector(".play-button");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const background = document.querySelector(".background");
const cover = document.querySelector(".audio__cover img");
const singer = document.querySelector(".singer");
const song = document.querySelector(".song");
const songLength = document.querySelector(".audio-length");
const progressBar = document.querySelector(".progressbar");
const currentTime = document.querySelector(".curent");
const timeline = document.querySelector(".timeline");

//play
playButton.addEventListener("click", function playPause() {
  if (audio.paused) {
    // audio.currentTime = 0;
    audio.play();
    playButton.classList.add("pause");
  } else {
    audio.pause();
    playButton.classList.remove("pause");
  }
  isPlay = !isPlay;
});
//

//prev
function changeContent() {
  audio.setAttribute("src", playList[playNum]);
  background.setAttribute("src", coverList[playNum]);
  cover.setAttribute("src", coverList[playNum]);
  singer.textContent = singerList[playNum];
  song.textContent = titleList[playNum];
}
function prev() {
  playNum = playNum - 1;
  if (playNum < 0) {
    playNum = playList.length - 1; //
  } else if (playNum > playList.length - 1) {
    playNum = 0;
  }
  changeContent();
}
prevButton.addEventListener("click", () => {
  prev();
  audio.play();
  playButton.classList.add("pause");
});

//next
function next() {
  playNum = playNum + 1;
  if (playNum < 0) {
    playNum = playList.length - 1;
  } else if (playNum > playList.length - 1) {
    playNum = 0;
  }
  changeContent();
}
nextButton.addEventListener("click", () => {
  next();
  audio.play();
  playButton.classList.add("pause");
});

//ended track

audio.addEventListener("ended", () => {
  next();
  audio.play();
});

//timecode
function formatSecondsToTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}
audio.addEventListener(
  "loadeddata",
  () => {
    songLength.textContent = formatSecondsToTime(audio.duration);
  },
  false,
);
setInterval(() => {
  progressBar.style.left = (audio.currentTime / audio.duration) * 100 + "%";
  currentTime.textContent = formatSecondsToTime(audio.currentTime);
}, 1000);

//timeline change
timeline.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeChange = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeChange;
  },
  false,
);

progressBar.onmousedown = function (e) {
  e.preventDefault();
  let shiftX = e.clientX - progressBar.getBoundingClientRect().left;
  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - timeline.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = timeline.offsetWidth - progressBar.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    progressBar.style.left = newLeft + "px";
  }
  function onMouseUp() {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};
progressBar.ondragstart = function () {
  return false;
};
//self-test
console.log(
  'Вёрстка:\nвёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5\nв футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\nКнопка Play/Pause\nесть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5\nвнешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5\nПри кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10\nПри смене аудиотрека меняется изображение - обложка аудиотрека +10\nПрогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10\nОтображается продолжительность аудиотрека и его текущее время проигрывания +10\nРезультат 60',
);

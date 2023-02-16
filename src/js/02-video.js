import Player from "@vimeo/player";
import  throttle from "lodash.throttle";

const iFrame = document.querySelector('#vimeo-player');
const player = new Player(iFrame);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

pageReload();

const onPlay = function ({seconds}) {
localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function pageReload(event){
const storageValue = localStorage.getItem(LOCALSTORAGE_KEY);
if (!storageValue){
return;
}
player.setCurrentTime(storageValue);
}
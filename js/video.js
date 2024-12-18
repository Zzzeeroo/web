var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("video", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  player.playVideo();
  player.setVolume(20);
}

var done = false;
function onPlayerStateChange(event) {
  player.playVideo();
  player.setVolume(20);
}

function togglemute() {
  if (!!player.isMuted()) {
    player.unMute();
  } else {
    player.mute();
  }
}

function toggleSound(img) {
  img.src = img.src.includes("sound_off.png")
    ? "Images/Icons/sound_on.png"
    : "Images/Icons/sound_off.png";
}

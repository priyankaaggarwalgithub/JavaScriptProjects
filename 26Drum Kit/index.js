function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return null;
  key.classList.add("playing");
  audio.currentTime = -1;
  audio.play();
  setTimeout(function() {
    key.classList.remove("playing");
  }, 100);
}

window.addEventListener("keydown", playSound);

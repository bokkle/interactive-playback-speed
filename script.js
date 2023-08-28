const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");
let isDragging = false;

speed.addEventListener("mousedown", (event) => {
  isDragging = true;
  updateSpeed(event);
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    updateSpeed(event);
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function updateSpeed(event) {
  const y = event.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

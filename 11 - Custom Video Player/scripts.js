// get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// button
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

function handleRangeUpdate(e) {
  console.log(this.name);
  video[this.name] = e.target.value;
}

function handleSkip(e) {
  // console.log(typeof Number(this.dataset.skip));
  video.currentTime += Number(this.dataset.skip);
}

//hook it up
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
skipButtons.forEach((skipButton) =>
  skipButton.addEventListener("click", handleSkip)
);

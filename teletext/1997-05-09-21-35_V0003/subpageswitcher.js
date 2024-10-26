document.addEventListener("DOMContentLoaded", function() {
  // Get all divs with the class 'subpage'
  const subpages = document.querySelectorAll(".subpage");
  const totalSubpages = subpages.length;

  // If there's only one or no subpages, no need to start the interval
  if (totalSubpages <= 1) return;

  let currentIndex = 0;
  let isPaused = false;
  let interval;

  // Function to show only the current div and hide the others
  function showCurrentSubpage() {
      subpages.forEach((subpage, index) => {
          subpage.style.display = index === currentIndex ? "block" : "none";
      });
  }

  // Function to start cycling through divs
  function startInterval() {
      interval = setInterval(function() {
          currentIndex = (currentIndex + 1) % totalSubpages;
          showCurrentSubpage();
      }, 5000); // 5000 milliseconds = 5 seconds
  }

  // Function to pause the interval
  function pauseInterval() {
      clearInterval(interval);
  }

  // Initially show the first subpage
  showCurrentSubpage();
  startInterval();

  // Event listener for spacebar to toggle pause/resume
  document.addEventListener("keydown", function(event) {
      if (event.code === "Space") {
          event.preventDefault(); // Prevent page from scrolling when spacebar is pressed
          if (isPaused) {
              startInterval();
          } else {
              pauseInterval();
          }
          isPaused = !isPaused;
      }
  });
});

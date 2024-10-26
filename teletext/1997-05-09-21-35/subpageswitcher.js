document.addEventListener("DOMContentLoaded", function() {
  // Get all divs with the class 'subpage'
  const subpages = document.querySelectorAll(".subpage");
  const totalSubpages = subpages.length;

  // If there's only one or no subpages, no need to start the interval
  if (totalSubpages <= 1) return;

  let currentIndex = 0;

  // Function to show only the current div and hide the others
  function showCurrentSubpage() {
      subpages.forEach((subpage, index) => {
          subpage.style.display = index === currentIndex ? "block" : "none";
      });
  }

  // Initially show the first subpage
  showCurrentSubpage();

  // Set interval to cycle through the divs every 5 seconds
  setInterval(function() {
      currentIndex = (currentIndex + 1) % totalSubpages;
      showCurrentSubpage();
  }, 5000); // 5000 milliseconds = 5 seconds
});

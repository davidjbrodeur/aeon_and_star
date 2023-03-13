const dots = document.getElementById("moving-dots");
let numDots = 3; // start with 3 dots

setInterval(() => {
  if (numDots === 0) {
    numDots = 3; // reset to 3 dots
  } else {
    numDots--; // remove one dot
  }

  dots.innerHTML = ".".repeat(numDots); // update content of span
}, 1000);

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the back-to-top button element
const backToTopButton = document.querySelector("#back-to-top");

// Function to check if the user has scrolled past the first screen
function checkScrollPosition() {
  const firstScreenHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  if (scrollPosition >= firstScreenHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

// Add an event listener to the window object to check the scroll position
window.addEventListener("scroll", checkScrollPosition);

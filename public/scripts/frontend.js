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

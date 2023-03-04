const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email-input");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to match email addresses
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email address"); // Throw an error if the email doesn't match the regular expression
  }
}

function resetUserError() {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.textContent = error.message;
  errorMessage.classList.remove("show");
  errorMessage.classList.add("hide");
}

function showErrorToUser(error) {
  const errorMessage = document.querySelector("#error-message");
  errorMessage.textContent = error.message;
  errorMessage.classList.remove("hide");
  errorMessage.classList.add("show");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  resetUserError();
  const email = emailInput.value;

  try {
    validateEmail(email); // Replace this with the email address you want to validate
    console.log("Email address is valid");
  } catch (err) {
    console.error(err.message); // Log the error message if the email address is invalid
    showErrorToUser(err.message);
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const url = `https://us1.api.mailchimp.com/3.0/lists/${listId}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "subscribed") {
        // User has been successfully subscribed to the mailing list
        alert("Thank you for subscribing!");
        emailInput.value = "";
      } else {
        // Something went wrong
        alert("Oops, something went wrong. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Oops, something went wrong. Please try again later.");
    });
});

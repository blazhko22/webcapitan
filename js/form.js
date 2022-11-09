const form = document.querySelector(".area__box-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { username, mail, phone_number, feedback }
  } = event.currentTarget;

  if (username.value === "" || mail.value === "" || phone_number.value === "" || feedback.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    return alert("Thank you, your application is registered");
  }

//   console.log(`Name: ${username.value}, Mail: ${mail.value}, Phone: ${phone_number.value}, Message: ${feedback.value}`);
//   event.currentTarget.reset();
}
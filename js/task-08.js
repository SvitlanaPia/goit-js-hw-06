const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  }
  const formDataObj = { Email: email.value, Password: password.value };
  console.log(formDataObj);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);

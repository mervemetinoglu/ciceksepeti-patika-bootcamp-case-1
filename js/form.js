// Form DOM values
const form = document.getElementById("form");
const company = document.getElementById("company");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const session = document.getElementById("session");
const exceptionTextarea = document.getElementById("exception");

// Modal DOM values
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-btn");
const modalList = document.querySelector(".modal__list");
const modalBody = document.querySelector(".modal__body");
const overlay = document.querySelector(".overlay");

let formValues = {};

form.addEventListener("submit", (e) => {
  const jobFunction = document.querySelector(
    'input[name="job-function"]:checked'
  );
  e.preventDefault();

  formValues["company"] = company.value;
  formValues["firstName"] = firstName.value;
  formValues["lastName"] = lastName.value;
  formValues["email"] = email.value;
  formValues["session"] = session.value;
  formValues["jobFunction"] = jobFunction.value;
  formValues["exception"] = exceptionTextarea.value;

  createModalListItem(formValues);
  openModal(modal);

  form.reset();
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function createModalListItem(formValues) {
  const listItemString = Object.keys(formValues)
    .map((item) => `<li>${item} : ${formValues[item]}</li>`)
    .join("");

  modalList.innerHTML = listItemString;
  modalBody.appendChild(modalList);
}

closeModalBtn.addEventListener("click", () => {
  closeModal(modal);
});

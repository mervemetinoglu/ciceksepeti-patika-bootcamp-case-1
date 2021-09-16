// Form DOM values
const form = document.getElementById("form");
const overlay = document.querySelector(".overlay");
const company = document.getElementById("company");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const session = document.getElementById("session");
const exceptionTextarea = document.getElementById("exception");

// Modal DOM values
const openModalBtn = document.querySelector("#modal-btn");
const closeModalBtn = document.querySelector("#close-btn");
const modalList = document.querySelector(".modal__list");
const modalBody = document.querySelector(".modal__body");

let formValues = [];

form.addEventListener("submit", (e) => {
  const jobFunction = document.querySelector(
    'input[name="job-function"]:checked'
  );
  e.preventDefault();

  formValues.push(company.value);
  formValues.push(firstName.value);
  formValues.push(lastName.value);
  formValues.push(email.value);
  formValues.push(session.value);
  formValues.push(jobFunction.value);
  formValues.push(exceptionTextarea.value);

  createModalListItem(formValues);

  form.reset();
});

openModalBtn.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  openModal(modal);
});

closeModalBtn.addEventListener("click", () => {
  const modal = closeModalBtn.closest("#modal");
  closeModal(modal);
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

  // Clear the list for modal body
  formValues.length = 0;
}

function createModalListItem(formValues) {
  const listItemString = formValues.map((item) => `<li>${item}</li>`).join("");
  modalList.innerHTML = listItemString;
  modalBody.appendChild(modalList);
}

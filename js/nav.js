const navExpand = document.querySelector(".nav__expand");
const sidebar = document.querySelector(".sidebar");

navExpand.addEventListener("click", () => {
  navExpand.classList.toggle("nav__expand-closed");
  sidebar.classList.toggle("sidebar-closed");
});

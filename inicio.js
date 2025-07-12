
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isOpen = sidebar.classList.toggle("open");

  if (isOpen){
    document.addEventListener("click", handleOutsideClick);
   } else {
    document.removeEventListener("click", handleOutsideClick);
  }
  function handleOutsideClick(event) {
    const toggleButton = document.querySelector(".menu-toggle");
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove("open");
      document.removeEventListener("click", handleOutsideClick);
    }
  }
}  

function togglePerfilMenu() {
  const menu = document.getElementById("perfilMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("perfilMenu");
  const perfil = document.querySelector(".perfil-usuario");
  if (!perfil.contains(event.target)) {
    menu.style.display = "none";
  }
});

function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

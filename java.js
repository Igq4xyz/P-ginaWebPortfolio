// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  // Aplicar tema guardado
  if (savedTheme === "light") {
    body.classList.add("light-mode");
  }

  // Botón
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      // Guardar preferencia
      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  }
});

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

const body = document.body;
const savedTheme = localStorage.getItem("theme");

const icons = [
  { id: "icon-x", file: "x" },
  { id: "icon-github", file: "github" },
  { id: "icon-linkedin", file: "linkedin" },
  { id: "icon-instagram", file: "instagram" },
  { id: "icon-fedora", file: "fedora" }
];

// Función para actualizar iconos
function updateIcons() {
  const isLight = body.classList.contains("light-mode");

  icons.forEach(icon => {
    const img = document.getElementById(icon.id);

    img.src = isLight 
      ? `icons/${icon.file}.svg`         // modo día (negro)
      : `icons/${icon.file}-blanco.svg`; // modo noche (blanco)
  });
}

// Aplicar tema guardado
if (savedTheme === "light") {
  body.classList.add("light-mode");
}

// Actualizar iconos al iniciar
updateIcons();

// Botón de cambiar tema
document.getElementById("theme-toggle").onclick = () => {
  body.classList.toggle("light-mode");

  // Guardar preferencia
  localStorage.setItem("theme",
    body.classList.contains("light-mode") ? "light" : "dark"
  );

  updateIcons();
};

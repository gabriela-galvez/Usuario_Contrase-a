// Configuración de usuario y contraseña válidos
const usuarioValido = "gigiana123";     // usuario correcto
const contrasenaValida = "bestgamer";   // contraseña correcta

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensajeError");

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    // Guardar usuario en localStorage
    localStorage.setItem("usuarioLogueado", usuario);
    // Redirigir a bienvenida
    window.location.href = "bienvenida.html";
  } else {
    mensajeError.textContent = "Usuario o contraseña incorrectos.";
  }
});


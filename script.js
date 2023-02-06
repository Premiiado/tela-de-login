const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === "admin" && password === "secret") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Nome de usuário ou senha inválidos.");
  }
});

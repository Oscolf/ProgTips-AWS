function validarUsuario() {
  loginData = document.getElementsByTagName("input");
  user = loginData[0].value;
  password = loginData[1].value;

  console.log("Usuario: " + user);
  console.log("Contraseña: " + password);

  alert("¡Hola " + user + ", ha accedido corrrectamente a ProgTips!");

  // se muestra el usuario y la contraseña en elementos HTML

  userElement = document.createElement("p");
  passwordElement = document.createElement("p");

  userElement.textContent = "Usuario: " + user;

  userInfoDiv = document.createElement("div");
  userInfoDiv.style.border = "1px solid black";
  userInfoDiv.style.padding = "10px";
  userInfoDiv.style.marginTop = "10px";

  userInfoDiv.appendChild(userElement);

  loginContainer = document.getElementsByClassName("login");
  loginContainer[0].appendChild(userInfoDiv);
}

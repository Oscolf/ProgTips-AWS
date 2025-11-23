function validarUsuario() {
  loginData = document.getElementsByTagName("input");
  user = loginData[0].value;
  password = loginData[1].value;

  console.log("¡Usuario registrado!");

  alert("¡Hola " + user + ", ha accedido corrrectamente a ProgTips!");

  userElement = document.createElement("article");

  userElement.textContent = "Usuario: " + user;
  userElement.style.color = "white";
  userElement.style.margin = "0 auto";

  userInfoDiv = document.createElement("div");
  userInfoDiv.appendChild(userElement);

  userInfoDiv.style.border = "1px solid white";
  userInfoDiv.style.padding = "2px";
  userInfoDiv.style.marginTop = "2px";
  userInfoDiv.style.backgroundColor = "#aaa";

  loginContainer = document.getElementsByClassName("login");

  loginContainer[0].appendChild(userInfoDiv);
}

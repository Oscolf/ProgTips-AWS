function validarUsuario() {
  loginData = document.getElementsByTagName("input");
  user = loginData[0].value;
  password = loginData[1].value;

  console.log("Usuario: " + user);
  console.log("Contraseña: " + password);

  alert("¡Hola " + user + ", ha accedido corrrectamente a ProgTips!");
}

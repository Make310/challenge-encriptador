const encriptar = () => {
  let encriptar = document.getElementById("texto1").value;
  if (encriptar) {
    document.querySelector(".aside__contenido").classList.add("ocultar");
    document.querySelector(".aside__encriptado").classList.remove("ocultar");
    encriptar = encriptar
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("texto2").value = encriptar;
  } else {
    document.querySelector(".aside__contenido").classList.remove("ocultar");
    document.querySelector(".aside__encriptado").classList.add("ocultar");
  }
};

const desencriptar = () => {
  let desencriptar = document.getElementById("texto1").value;
  if (desencriptar) {
    document.querySelector(".aside__contenido").classList.add("ocultar");
    document.querySelector(".aside__encriptado").classList.remove("ocultar");
    desencriptar = desencriptar
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.getElementById("texto2").value = desencriptar;
  } else {
    document.querySelector(".aside__contenido").classList.remove("ocultar");
    document.querySelector(".aside__encriptado").classList.add("ocultar");
  }
};

const seleccionar = () => {
  document.getElementById("texto2").select();
  document.execCommand("copy");
};

document.getElementById("btn-1").addEventListener("click", encriptar);
document.getElementById("btn-2").addEventListener("click", desencriptar);
document.getElementById("btn-3").addEventListener("click", seleccionar);

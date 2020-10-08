
var temas = document.getElementById('temas');

temas.addEventListener('change', function () {
  switch (this.value) {
    case "claro":
      document.body.style.background = "#efefef";//altera cor de fundo
      document.querySelector('h1').style.color = "#31363b" //altera cor do texto
      break;
    case "escuro":
      document.body.style.background = "#31363b";//altera cor de fundo
      document.querySelector('h1').style.color = "#efefef" //altera cor do texto
      break;
    default:
  }
});
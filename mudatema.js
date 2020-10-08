
var temas = document.getElementById('temas');

temas.addEventListener('change', function () {
  switch (this.value) {
    case "claro":
      document.body.style.background = "#f1f7fa";//altera cor de fundo
      document.querySelector('h1').style.color = "#072540" //altera cor do texto
      break;
    case "escuro":
      document.body.style.background = "#072540";//altera cor de fundo
      document.querySelector('h1').style.color = "#9c4668" //altera cor do texto
      break;
    default:
  }
});
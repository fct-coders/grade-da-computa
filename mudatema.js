function seta_tema(tema) {
  switch (tema) {
    case "claro":
      document.body.style.background = "#efefef";//altera cor de fundo
      document.querySelector('h1').style.color = "#31363b" //altera cor do texto
      localStorage.setItem('tema', 'claro'); //salva o tema escolhido em cache
      break;
    case "escuro":
      document.body.style.background = "#31363b";//altera cor de fundo
      document.querySelector('h1').style.color = "#efefef" //altera cor do texto
      localStorage.setItem('tema', 'escuro'); //salva o tema escolhido em cache
      break;
    default:
  }
}

var option = document.getElementById('temas');
option.addEventListener('change', function () { seta_tema(this.value) });

//seta o tema selecionado ao carregar página
function carrega_tema() {
  const tema = localStorage.getItem('tema');
  if (tema) {
    seta_tema(tema);
    option.value = tema;
  }
}
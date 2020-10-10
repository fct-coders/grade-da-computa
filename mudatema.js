const select = document.getElementById('temas');

function getTemas() {
  const temas = JSON.parse(localStorage.getItem('temasArray'));

  for (let i = 0; i < temas.length; i++) {
    let option = document.createElement('option');
    option.value = JSON.stringify(temas[i]);
    option.textContent = temas[i].nome;
    select.appendChild(option);
  }
}

function seta_tema(tema) {
  let objTema = JSON.parse(tema);
  document.body.style.background = objTema.corFundo;//altera cor de fundo
  document.querySelector('h1').style.color = objTema.corTextoHeader; //altera cor do texto
  localStorage.setItem('tema', tema); //salva o tema escolhido em cache

}

select.addEventListener('change', function () {
  seta_tema(this.value);
});

//seta o tema selecionado ao carregar página
function carrega_tema() {
  getTemas();
  const tema = localStorage.getItem('tema');
  if (tema) {
    seta_tema(tema);
    select.value = tema;
  }
}
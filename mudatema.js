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
  document.body.style.background = objTema.corFundo;
  document.querySelector('h1').style.color = objTema.corTextoHeader;
  document.body.style.color = objTema.corTextoComum;
  document.querySelector('table').style.background = objTema.corTabelaPreenchimento;
  document.querySelectorAll('th').forEach(table => {
    table.style.borderColor = objTema.corTabelaBorda
  });

  localStorage.setItem('tema', tema); //salva o tema escolhido no local storage 

}

select.addEventListener('change', function () {
  seta_tema(this.value);
});


function carrega_tema() {
  getTemas();
  const tema = localStorage.getItem('tema');
  if (tema) {//carrega o tema se ja foi selecionado 
    seta_tema(tema);
    select.value = tema;
  }
  else {//carrega o tema que do primeiro value do select
    seta_tema(select.value);
  }
}
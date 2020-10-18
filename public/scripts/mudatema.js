const select = document.getElementById('temas');

async function getTemas() {
  return new Promise((resolve, reject) => {
    fetch('./data/temas.json')
    .then((response) => response.json())
    .then((temas) => {
      temas.forEach((tema) => {
        let option = document.createElement('option');
        option.value = JSON.stringify(tema);
        option.textContent = tema.nome;
        select.appendChild(option);
        resolve()
      });
    }).catch(reject);
  })
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
  document.querySelectorAll('.materia').forEach(element => {
    element.style.background = objTema.corCards;
    element.style.borderColor = objTema.corTabelaBorda;
  });
  document.querySelectorAll('.info').forEach(element => {
    element.style.background = objTema.corInfos;
  });
  document.querySelector('footer').style.background = objTema.corCards;
  document.querySelector('footer a:visited, a').style.color = objTema.corTextoComum;

  localStorage.setItem('temaSelecionado', tema); //salva o tema escolhido no local storage 

}

select.addEventListener('change', function () {
  seta_tema(this.value);
});


async function carrega_tema() {
  await getTemas();
  const tema = localStorage.getItem('temaSelecionado');
  if (tema) {//carrega o tema se ja foi selecionado 
    seta_tema(tema);
    select.value = tema;
  }
  else {//carrega o tema do primeiro value do select
    seta_tema(select.value);
  }
}
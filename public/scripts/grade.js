function aparece_info(info) {
    document.getElementById(info).style.display = 'block';
}

function desaparece_info(info) {
    document.getElementById(info).style.display = 'none';
}

function cria_disciplinas(obj, x) {
    //cria card
    const card = document.createElement("div");
    card.setAttribute("class", "materia");
    const materia = document.createElement("p");
    materia.innerHTML = obj.id;
    card.appendChild(materia);
    const info = document.createElement("div");
    info.setAttribute("id", `${x}ID`)
    info.setAttribute("class", "info");
    const p1 = document.createElement("h1");
    p1.innerHTML = `${obj.nome}`;
    info.appendChild(p1);
    const p2 = document.createElement("p");
    p2.innerHTML = `Docente: ${obj.docente}`;
    info.appendChild(p2);
    const p3 = document.createElement("p");
    p3.innerHTML = `Email: ${obj.email}`;
    info.appendChild(p3);
    const p4 = document.createElement("p");
    p4.innerHTML = `Tranca: `;
    const br = document.createElement("br");
    info.appendChild(p4);
    const lista = document.createElement("ul");
    obj.tranca.map(i => {
        const item = document.createElement("li");
        item.innerHTML = `${i}`;
        lista.appendChild(item);
    })
    info.appendChild(lista);
    const p5 = document.createElement("p");
    p5.innerHTML = "Trancado por: "
    info.appendChild(p5);
    const lista2 = document.createElement("ul");
    obj.trancadoPor.map(i => {
        const item = document.createElement("li");
        item.innerHTML = `${i}`;
        lista2.appendChild(item);
    }
    )
    info.appendChild(lista2);
    card.appendChild(info);
    card.setAttribute("onmouseenter", `aparece_info("${x}ID")`);
    card.setAttribute("onmouseleave", `desaparece_info("${x}ID")`);
    return card;
}

function gera_tabela() {
    fetch('./data/disciplinas.json')
        .then((response) => response.json())
        .then((disciplinas) => {
            disciplinas.forEach((disciplina) => {
                x = parseInt(disciplina.ano);
                y = parseInt(disciplina.semestre);
                componente = cria_disciplinas(disciplina, disciplinas.indexOf(disciplina));
                if (x === 1) {
                    componente.lastChild.style.float = 'left'
                } else {
                    componente.lastChild.style.float = 'right'
                }
                document.querySelectorAll("th")[x + y * 4 + y].querySelector("div").appendChild(componente);
            });
        });
}


function aparece_info(info){
    document.getElementById(info).style.display = 'block';
}

function desaparece_info(info){
    document.getElementById(info).style.display = 'none';
}

function cria_diciplinas(obj, x){
    //cria card
    const card = document.createElement("div");
    card.setAttribute("class", "materia");
    const materia = document.createElement("p");
    materia.innerHTML = obj.nome;
    card.appendChild(materia);
    const info = document.createElement("div");
    info.setAttribute("id",`${x}ID`)
    info.setAttribute("class","info");
    const p1 = document.createElement("p");
    p1.innerHTML =`Docente:${obj.docente}`;
    info.appendChild(p1);
    const p2 = document.createElement("p");
    p2.innerHTML = `Email:${obj.email}`;
    info.appendChild(p2);
    const p3 = document.createElement("p");
    p3.innerHTML = `Materias que tranca:`;
    const br = document.createElement("br");
    info.appendChild(br);
    info.appendChild(p3);
    const lista = document.createElement("ul");
    obj.tranca.map(i=>{
        const item = document.createElement("li");
        item.innerHTML = `${i}`;
        lista.appendChild(item);
    })
    info.appendChild(lista);
    const p4 = document.createElement("p");
    p4.innerHTML = "É trancado por:"
    info.appendChild(p4);
    const p5 = document.createElement("p");
    p5.innerHTML = obj.trancadoPor;
    info.appendChild(p5);
    card.appendChild(info);
    card.setAttribute("onmouseenter", `aparece_info("${x}ID")`);
    card.setAttribute("onmouseleave", `desaparece_info("${x}ID")`);
    return card;
}

function gera_tabela(){
    const diciplinas = JSON.parse(localStorage.getItem("Diciplinas"));
    let x,y,componente;
    console.log(diciplinas);
    for(let i=0; i<diciplinas.length;i++){
        x=parseInt(diciplinas[i].ano);
        y=parseInt(diciplinas[i].semestre);
        console.log(x+y*4+y)
        componente= cria_diciplinas(diciplinas[i], i);
        console.log(componente);
        document.querySelectorAll("th")[x+y*4+y].querySelector("div").appendChild(componente);
    }
}
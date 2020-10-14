let i = 1;

function rotacao(item, v){
    const graus = v*90
    item.style.transform= `rotate${graus}deg`
}

function acao(){
    const item = document.getElementById("cacicID");
    const graus = i*90;
    item.style.transform= `rotate(${graus}deg)`
    if(i<4){
        i++;
    }
    else{
        const tranca = document.createElement("div");
        tranca.style.width = "100vw";
        tranca.style.height = "100vh";
        tranca.style.zIndex = "999";
        tranca.style.background = "rgba(175,170,170,0.5)";
        tranca.style.position="absolute";
        tranca.style.textAlign="center";
        tranca.style.fontSize="2vw";
        tranca.style.top="0px";
        const img = document.createElement("img");
        img.setAttribute("src", "public/imagens/system.png");
        tranca.appendChild(img);
        let x =0 
        setInterval(function(){
                img.style.transitionDuration="4s";
                img.style.transform="rotate(5760deg)"
            if(x<=50){
                img.style.height=`${x}vw`;
                img.style.width=`${x}vw`;
                x++;
            }
        },15)
        /* const text1 = document.createElement("h1");
        text1.innerHTML= "Parabéns!!";
        tranca.appendChild(text1);
        const text2 = document.createElement("h1");
        text2.innerHTML = "Você trancou o curso de ciência da puta";
        tranca.appendChild(text2); */
        document.querySelector("body").appendChild(tranca);
    }
}
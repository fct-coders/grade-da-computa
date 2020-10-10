const obj = [
    {
        "nome": "Tema Hacktober 2020",
        "corFundo": "#072540",
        "corTextoHeader": "#000000",
        "corTextoComum": "#93c2db",
        "corTabelaBorda": "9c4668",
        "corTabelaPreenchimento": "ff8ae2"
    },
    {
        "nome": "Tema Claro",
        "corFundo": "#efefef",
        "corTextoHeader": "#31363b",
        "corTextoComum": "#31363b",
        "corTabelaBorda": "",
        "corTabelaPreenchimento": ""
    },
    {
        "nome": "Tema Escuro",
        "corFundo": "#31363b",
        "corTextoHeader": "#efefef",
        "corTextoComum": "#efefef",
        "corTabelaBorda": "",
        "corTabelaPreenchimento": ""
    }
]

const temasObj = JSON.stringify(obj);
localStorage.setItem('temasArray', temasObj);
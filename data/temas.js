const obj = [
    {
        "nome": "Tema Hacktober 2020",
        "corFundo": "#072540",
        "corTextoHeader": "#000000",
        "corTextoComum": "#072540",
        "corTabelaBorda": "#9c4668",
        "corTabelaPreenchimento": "#ff8ae2",
        "corCards": "#93c2db",
        "corInfos": ""
    },
    {
        "nome": "Tema Claro",
        "corFundo": "#efefef",
        "corTextoHeader": "#31363b",
        "corTextoComum": "#31363b",
        "corTabelaBorda": "",
        "corTabelaPreenchimento": "",
        "corCards": "",
        "corInfos": ""
    },
    {
        "nome": "Tema Escuro",
        "corFundo": "#31363b",
        "corTextoHeader": "#efefef",
        "corTextoComum": "#efefef",
        "corTabelaBorda": "",
        "corTabelaPreenchimento": "",
        "corCards": "",
        "corInfos": "black"
    }
]

const temasObj = JSON.stringify(obj);
localStorage.setItem('temasArray', temasObj);
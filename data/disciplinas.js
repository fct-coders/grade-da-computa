const ob = [
    {
        "nome": "ATP",
        "ano": "1",
        "semestre": "1",
        "docente": "Piteri",
        "email": "email.do.piteri@unesp.br",
        "tranca": 
        [
            "Estrutura de dados 1",
            "Programação Orientada a Objetos 1"
        ],
        "trancadoPor": ""
    },
    {
        "nome": "ATP2",
        "ano": "1",
        "semestre": "1",
        "docente": "Piteri",
        "email": "email.do.piteri@unesp.br",
        "tranca": 
        [
            "Estrutura de dados 1",
            "Programação Orientada a Objetos 1"
        ],
        "trancadoPor": ""
    },
    {
        "nome": "ED",
        "ano": "2",
        "semestre": "2",
        "docente": "Ronaldo",
        "email": "email.do.piteri@unesp.br",
        "tranca": 
        [
            "Estrutura de dados 1",
            "Programação Orientada a Objetos 1"
        ],
        "trancadoPor": ""
    },
]

const DicObj = JSON.stringify(ob);
localStorage.setItem('Diciplinas', DicObj);
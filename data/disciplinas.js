const ob = [
    {
        "nome": "ATP1",
        "ano": "1",
        "semestre": "1",
        "docente": "Piteri",
        "email": "email.do.piteri@unesp.br",
        "tranca": 
        [
            "EDs 1",
            "POO 1"
        ],
        "trancadoPor": ""
    },
    {
        "nome": "ATP2",
        "ano": "1",
        "semestre": "2",
        "docente": "Piteri",
        "email": "email.do.piteri@unesp.br",
        "tranca": 
        [
            "Estrutura de dados 2"
        ],
        "trancadoPor": ""
    },
    {
        "nome": "ED1",
        "ano": "2",
        "semestre": "1",
        "docente": "Ronaldo",
        "email": "email.do.ronaldo@unesp.br",
        "tranca": 
        [
            "Banco de Dados"
        ],
        "trancadoPor": "Estrutura de Dados 1"
    },
]

const DicObj = JSON.stringify(ob);
localStorage.setItem('Diciplinas', DicObj);

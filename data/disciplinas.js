/*

    Template:
    {
        "nome": "Nome da Disciplina",
        "id": "Abreviação do Nome se possível",
        "ano": "X",
        "semestre": "Y",
        "docente": "Nome do Docente Efetivo ou "Substituto" se não houver docente efetivo",
        "email": "email@unesp.br do docente efetivo",
        "tranca":
            [
                "Lista de disciplinas que essa matéria tranca",
                "Ou apenas uma string se a matéria tranca somente uma disciplina"
                "Ou vazio se não tranca nada"
            ],
        "trancadoPor": "Mesma coisa do campo "tranca:" "
    }

*/

const ob = [
    {
        "nome": "Algoritmos e Técnicas de Programação 1",
        "id": "ATP 1",
        "ano": "1",
        "semestre": "1",
        "docente": "Marco Antônio Piteri",
        "email": "marco.piteri@unesp.br",
        "tranca":
            [
                "Estrutura de Dados 1",
                "Programação Orientada a Objetos 1"
            ],
        "trancadoPor":[] 
    },
    {
        "nome": "Lógica",
        "id": "Lógica",
        "ano": "1",
        "semestre": "1",
        "docente": "Almir Artero",
        "email": "almir.artero@unesp.br",
        "tranca":
        [
        ],
        "trancadoPor":
        [
        ]
    },
    {
        "nome": "Algoritmos e Técnicas de Programação 2",
        "id": "ATP 2",
        "ano": "1",
        "semestre": "2",
        "docente": "Marco Antônio Piteri",
        "email": "marco.piteri@unesp.br",
        "tranca":
        [
            "Estrutura de dados 2"
        ],
        "trancadoPor":
        [
        ]
    },
    {
        "nome": "Estrutura de Dados 1",
        "id": "ED 1",
        "ano": "2",
        "semestre": "1",
        "docente": "Ronaldo",
        "email": "ronaldo.correia@unesp.br",
        "tranca":
        [
            "Banco de Dados"
        ],
        "trancadoPor":
        [
            "Estrutura de Dados 1"
        ]
    },
]

const DicObj = JSON.stringify(ob);
localStorage.setItem('Diciplinas', DicObj);

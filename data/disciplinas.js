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
            "Ou vazio se não tranca nada"
        ],
        "trancadoPor": "Mesma coisa do campo "tranca:" "
    }

*/

const ob = [

    // Primeiro ano, primeiro semestre
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
        "trancadoPor":
        [

        ]
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

    // Primeiro ano, segundo semestre
    {
        "nome": "Algoritmos e Técnicas de Programação 2",
        "id": "ATP 2",
        "ano": "1",
        "semestre": "2",
        "docente": "Marco Antônio Piteri",
        "email": "marco.piteri@unesp.br",
        "tranca":
        [
            "Projeto e Análise de Algoritmos"
        ],
        "trancadoPor":
        [
        ]
    },

    //Segundo ano, primeiro semestre
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

    // Segundo ano, segundo semestre
    {
        "nome": "Estrutura de Dados 2",
        "id": "ED 2",
        "ano": "2",
        "semestre": "2",
        "docente": "Milton",
        "email": "milton.h.shimabukuro@unesp.br",
        "tranca":
        [ 
        ],
        "trancadoPor":
        [
        ]
    },

    {
        "nome": "Projeto e Análise de Algoritmos",
        "id": "PAA",
        "ano": "2",
        "semestre": "2",
        "docente": "Danilo",
        "email": "danilo.eler@unesp.br",
        "tranca":
        [ 
        ],
        "trancadoPor":
        [
            "Algoritmos e Técnicas de Programação 2"
        ]
    },
    
    // Terceiro ano, primeiro semestre

    {
        "nome": "Sistemas Operacionais II",
        "id": "SO II",
        "ano": "3",
        "semestre": "1",
        "docente": "Maurício Araújo Dias",
        "email": "ma.dias@unesp.br",
        "tranca":
        [
        ],
        "trancadoPor":
        [
        ]
    },

    {
        "nome": "Processamento Digital de Imagens",
        "id": "PDI",
        "ano": "3",
        "semestre": "1",
        "docente": "Milton Hirokazu Shimabukuro",
        "email": "milton.h.shimabukuro@unesp.br",
        "tranca":
        [
        ],
        "trancadoPor":
        [
        ]
    },
    
    // Terceiro ano, segundo semestre

    {
        "nome": "Redes de Computadores II",
        "id": "Redes II",
        "ano": "3",
        "semestre": "2",
        "docente": "Helton Molina Sapia",
        "email": "helton.sapia@unesp.br",
        "tranca":
        [
           
        ],
        "trancadoPor": []
    },
    {
        "nome": "Banco de Dados II",
        "id": "Banco II",
        "ano": "3",
        "semestre": "2",
        "docente": "Ronaldo Celso Messias Correia",
        "email": "ronaldo.correia@unesp.br",
        "tranca":
        [
        ],
        "trancadoPor": []
    }
    // Quarto ano, primeiro semestre

    
    // Quarto ano, segundo semestre

]

const DicObj = JSON.stringify(ob);
localStorage.setItem('Diciplinas', DicObj);

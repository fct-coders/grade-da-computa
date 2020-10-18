# Guidelines de contribuição

## Adicionando uma disciplina

**1.** Faça o seu próprio fork do repositório.<br>
**2.** Clone o seu fork `git clone https://github.com/SEU-NOME/computa-full-fct-unesp.git`;<br>
**3.** Abra o arquivo `data/disciplinas.js` com um editor de texto de sua escolha;<br>
**4.** Siga o template para adicionar uma disciplina, não se esqueça de posicioná-la adequadamente no código:<br>
```json
{
    "nome": "Nome da Disciplina",
    "id": "Abreviação do Nome se possível",
    "ano": "X",
    "semestre": "Y",
    "docente": "Nome do Docente Efetivo ou \"Substituto\" se não houver docente efetivo",
    "email": "email@unesp.br do docente efetivo",
    "tranca":
    [
        "Lista de disciplinas que essa matéria tranca",
        "Ou vazio se não tranca nada"
    ],
    "trancadoPor": "Mesma coisa do campo \"tranca:\" "
}
```
> ℹ️ INFO: Note os `\"` antes de algumas aspas. Ao adicionarmos uma barra invertida (\\), estamos anulando o efeito do caractere seguinte. 
> Neste caso, sem as barras invertidas, ocorreria um erro de sintaxe, pois as opções que as contém só aceitam um (1) valor. Ao deixar uma palavra fora das aspas, você estaria criando mais um valor. 
> Portanto, caso queria utilizar uma aspa no texto, use `\"`.
>
> Aprenda mais sobre caracteres de escape visitando [esta página da Wikipédia](https://pt.wikipedia.org/wiki/Caractere_de_escape) e sobre [a sintaxe de json aqui (em inglês)](https://www.w3schools.com/js/js_json_syntax.asp).

**5.** Salve suas alterações;<br>
**6.** Navegue até o diretório que você clonou através do seu git CLI;<br>
**7.** Crie uma branch para a sua alteração: `git checkout -b add-disciplina`;<br>
**8.** Adicione o arquivo modificado: `git add data/disciplinas.js`;<br>
**9.** Faça o commit: `git commit -m "feat: add nova disciplina"`;<br>
**10.** Envie para o GitHub: `git push origin add-disciplina`;<br>
**11.** Crie sua pull request utilizando o link disponibilizado no output do *git push*.

### Importante:

- Adicione apenas uma disciplina. É importante que todos tenham a oportunidade de contribuir para o repositório.

## Outras contribuições

Se você tem conhecimento em git e desenvolvimento web, também pode contribuir de outras maneiras, como por exemplo:

- Contribuir para o design da página;
- Criar novas features para a página;
- Contribuir para a organização do repositório;
- Adicionar informações úteis nos arquivos markdown (.md);
- Consertar possíveis bugs.

# Guidelines de contribuição

## Adicionando uma disciplina

1. Faça o seu próprio fork do repositório.
2. Clone o seu fork `git clone https://github.com/SEU-NOME/computa-full-fct-unesp.git`.
3. Abra o arquivo `data/disciplinas.js` com o editor de texto ou código a sua escolha.
4. Siga o template para adicionar uma disciplina, não se esqueça de posicioná-la adequadamente no código.
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
5. Salve suas alterações.
6. Navegue até o diretório que você clonou através do seu git CLI.
7. Crie uma branch para a sua alteração: `git checkout -b add-disciplina`.
8. Adicione o arquivo modificado: `git add data/disciplinas.js`.
9. Faça o commit `git commit -m "feat: add nova disciplina"`.
10. Envie para o github `git push origin add-disciplina`.
11. Crie sua pull request utilizando o link disponibilizado no output do git push.

### Importante

- Adicione apenas uma disciplina. É importante que todos tenham a oportunidade de contribuir para o repositório.

## Outras contribuições

Se você tem mais conhecimento em git e desenvolvimento web também pode contribuir de outras maneiras, como por exemplo:

- Contribuir para o design da pagina.
- Criar novas features para a página.
- Contribuir para a organização do repositório.
- Adicionar informações úteis nos arquivos markdown (.md).
- Consertar possíveis bugs.

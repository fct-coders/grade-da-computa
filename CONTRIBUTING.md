# Guidelines de contribuição

## Adicionando uma disciplina

**1.** Faça o seu próprio fork do repositório.<br>
**2.** Clone o seu fork `git clone https://github.com/SEU-NOME/computa-full-fct-unesp.git`;<br>
**3.** Abra o arquivo `data/disciplinas.json` com um editor de texto de sua escolha;<br>
**4.** Siga o template para adicionar uma disciplina, não se esqueça de posicioná-la adequadamente no código:<br>

```json
{
  "nome": "Nome da Disciplina",
  "id": "Abreviação do Nome se possível",
  "ano": "X",
  "semestre": "Y",
  "docente": "Não estamos adicionando os nomes no momento, utilize ~",
  "email": "Não estamos adicionando os emails no momento, utilize ~",
  "tranca": [
    "Lista de disciplinas que essa matéria tranca",
    "Ou vazio se não tranca nada"
  ],
  "trancadoPor": "Mesma coisa do campo "tranca:" "
}
```

**5.** Salve suas alterações;<br>
**6.** Navegue até o diretório que você clonou através do seu git CLI;<br>
**7.** Instale o npm serve para verificar suas mudanças: `npm install -g serve` (utilize sudo no linux);<br>
**8.** Execute o npm serve: `serve .`;<br>
**9.** Abra o http://localhost:5000 em seu navegador e verifique se suas mudanças tem o efeito desejado, se sim volte para sua CLI e cancele o processo do serve com `ctrl+c`;<br>
**10.** Crie uma branch para a sua alteração: `git checkout -b add-disciplina`;<br>
**11.** Adicione o arquivo modificado: `git add data/disciplinas.json`;<br>
**12.** Faça o commit: `git commit -m "feat: add nova disciplina"`;<br>
**13.** Envie para o GitHub: `git push origin add-disciplina`;<br>
**14.** Crie sua pull request utilizando o link disponibilizado no output do _git push_.

### Importante:

- Adicione apenas uma disciplina. É importante que todos tenham a oportunidade de contribuir para o repositório.

## Outras contribuições

Se você tem conhecimento em git e desenvolvimento web, também pode contribuir de outras maneiras, como por exemplo:

- Contribuir para o design da página;
- Criar novas features para a página;
- Contribuir para a organização do repositório;
- Adicionar informações úteis nos arquivos markdown (.md);
- Consertar possíveis bugs.

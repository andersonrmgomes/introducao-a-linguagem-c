# IntroC — Documentação de Apoio (Lógica de Programação)

Este site é uma coleção de páginas didáticas sobre conceitos básicos de C (ANSI C style). Foi projetado para ser hospedado no GitHub Pages sem dependências externas (apenas HTML/CSS/JS puros).

Conteúdo:
- `index.html` — Primeiros passos, `main()`, `;` e `#include <stdio.h>`
- `logica.html` — Operadores relacionais e lógicos; regra de verdade em C (0 = falso)
- `fluxo.html` — `if/else`, `switch`, `for`
- `funcoes.html` — funções e vetores (índice começa em 0)

Testar localmente
1) Abra `index.html` no navegador (duplo clique ou `start index.html` no PowerShell).

2) Servir via Python (recomendado para simular hospedagem):
```powershell
python -m http.server 8000
# abra http://localhost:8000
```

Deploy no GitHub Pages
1) Crie um repositório no GitHub e envie os arquivos.
2) No repositório, vá em _Settings > Pages_ e selecione a branch (`main` ou `gh-pages`) e a pasta `/` (root).
3) Salve. O site estará disponível em `https://<seu-usuario>.github.io/<seu-repo>/`.

Observações de implementação
- Layout com sidebar fixa em `css/style.css` (grid). Mobile: sidebar vira barra superior rolável.
- Blocos de código usam `<pre><code>` e classes CSS leves para sintaxe (ver `css/style.css`). Exemplos nos HTML contém spans com classes (`.kw`, `.type`, `.func`, `.str`, `.num`, `.comment`) para destacar tokens mais importantes.
- Interatividade: `js/script.js` fornece botões para mostrar/ocultar respostas e validação simples de quizzes (sem armazenamento).

Licença / uso
Conteúdo educacional — use e adapte para aulas e exercícios.

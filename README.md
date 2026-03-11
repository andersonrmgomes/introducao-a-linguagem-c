# Introdução à Linguagem C

Site educacional completo sobre a linguagem C, com design moderno e responsivo. Cobre desde os primeiros passos até tópicos avançados como ponteiros e manipulação de arquivos.

## Estrutura do Projeto

```
.
├── index.html          # Módulo 01 — Primeiros Passos
├── sintaxe.html        # Módulo 02 — Sintaxe e Tipos
├── io.html             # Módulo 03 — Entrada e Saída
├── logica.html         # Módulo 04 — Lógica e Operadores
├── fluxo.html          # Módulo 05 — Estruturas de Fluxo
├── funcoes.html        # Módulo 06 — Funções e Matrizes
├── avancado.html       # Módulo 07 — Avançado (Ponteiros e Arquivos)
├── reservadas.html     # Módulo 08 — Palavras Reservadas
├── favicon.svg
├── css/
│   └── style.css       # Estilos globais (tema dark, componentes, responsivo)
└── js/
    └── script.js       # Interatividade: quiz, sidebar mobile, toggle de respostas
```

## Conteúdo por Módulo

| # | Página | Tópicos |
|---|--------|---------|
| 01 | `index.html` | História do C, função `main()`, `#include`, biblioteca `math.h`, constantes |
| 02 | `sintaxe.html` | Tipos primitivos, `printf`, `scanf`, especificadores de formato, largura e precisão |
| 03 | `io.html` | Saída formatada, leitura de entrada, `fgets`, tabela de funções de I/O |
| 04 | `logica.html` | Operadores aritméticos, relacionais, lógicos e de atribuição |
| 05 | `fluxo.html` | `if/else`, operador ternário, `switch`, `for`, `while`, `do-while`, `break`, `continue` |
| 06 | `funcoes.html` | Funções com retorno, `void`, protótipos, recursão, arrays/vetores |
| 07 | `avancado.html` | Ponteiros, operadores `&` e `*`, alocação dinâmica (`malloc`, `free`), I/O de arquivos |
| 08 | `reservadas.html` | Lista completa de palavras reservadas C99/C11 com descrições |

## Design

O site usa um tema **dark editorial** inspirado em editores de código modernos.

**Tipografia**
- [Syne](https://fonts.google.com/specimen/Syne) — títulos e cabeçalhos (bold, impactante)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — código e elementos monoespaçados
- [Inter](https://fonts.google.com/specimen/Inter) — texto corrido

**Paleta de cores**

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#0c0e14` | Fundo principal |
| `--bg-2` | `#12151f` | Cards e sidebar |
| `--bg-3` | `#1a1e2e` | Elementos aninhados |
| `--accent` | `#4ade80` | Verde — destaque primário |
| `--accent-2` | `#60a5fa` | Azul — notas informativas |
| `--accent-3` | `#f59e0b` | Âmbar — avisos |

**Syntax highlighting**

| Classe | Cor | Elemento |
|--------|-----|---------|
| `.kw` | `#93c5fd` | Palavras-chave (`if`, `for`, `return`…) |
| `.type` | `#4ade80` | Tipos (`int`, `float`, `void`…) |
| `.func` | `#fbbf24` | Chamadas de função |
| `.str` | `#fb923c` | Strings e chars |
| `.num` | `#f472b6` | Literais numéricos |
| `.comment` | `#475569` | Comentários |

## Funcionalidades

- **Sidebar de navegação** fixa com indicador de página ativa
- **Quiz interativo** em cada módulo com verificação imediata e botão "Mostrar resposta"
- **Highlight de sintaxe** manual via classes CSS nos blocos `<pre><code>`
- **Callouts** diferenciados: notas (azul) e avisos (âmbar)
- **Navegação entre páginas** (anterior / próximo) no rodapé de cada módulo
- **Layout responsivo** com topbar e sidebar deslizante para mobile

## Como Usar

Por ser um site estático puro (HTML, CSS e JS sem dependências externas além das fontes do Google Fonts), basta abrir qualquer `.html` diretamente no navegador:

```bash
# Opção 1 — abrir direto
open index.html

# Opção 2 — servidor local (recomendado para evitar problemas de CORS)
python3 -m http.server 8080
# acesse http://localhost:8080
```

> As fontes são carregadas via Google Fonts. Sem conexão à internet, o site usa fontes do sistema como fallback.

## Padrão C Coberto

O conteúdo é baseado nos padrões **C99** e **C11** (ISO/IEC 9899). Algumas palavras reservadas exclusivas do C11 são identificadas explicitamente no Módulo 08.

Para compilar os exemplos de código presentes no site, recomenda-se:

```bash
gcc -std=c11 -Wall -Wextra programa.c -o programa

# Para exemplos com math.h:
gcc -std=c11 -Wall programa.c -o programa -lm
```

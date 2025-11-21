# 📘 Monitoria de Algoritmos e Lógica de Programação

Site desenvolvido para apoiar a monitoria da disciplina **Algoritmos e Lógica de Programação** da Fatec Rubens Lara (ADS).  
O objetivo é fornecer aos estudantes um espaço organizado com informações sobre monitoria, conteúdos teóricos, exemplos práticos, listas de exercícios e horários de atendimento. 

---

## 📑 Sumário
- [Introdução](#introducao)
- [Demonstração](#demonstracao)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalacao)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura de Conteúdo](#arquitetura)
- [Próximos Passos](#roadmap)
- [Contribuição](#contribuicao)
- [Licença](#licenca)

---

## 🧾 Introdução <a id="introducao"></a>

Este projeto é um **site estático** que organiza o material de monitoria de Algoritmos.  
O conteúdo é dividido em seções, incluindo:

- Sobre a Monitoria  
- Conteúdo da Disciplina *(estruturas de controle, algoritmos de ordenação, estruturas de dados, etc.)*  
- Listas de Exercícios para download  
- Horários e Contato da monitora  

---

## 🌐 Demonstração <a id="demonstracao"></a>

📷 ![Demonstração do site](./img/gif-site.gif)
🔗 [Link do Deploy](https://monitoriadealgoritmos.vercel.app/)

---

## 📂 Estrutura do Projeto <a id="estrutura-do-projeto"></a>

```
/
├── index.html          # Estrutura principal do site
├── main.css            # Estilos globais e layout
├── conteudo.css        # Estilos específicos da seção de conteúdo
├── img/                # Imagens e ícones do site
├── main.js             # Script para interatividade (placeholder no momento)
└── README.md           # Documentação do projeto
```

---

## ⚙️ Instalação <a id="instalacao"></a>

Clone o repositório:

```bash
git clone https://github.com/leandrooliss/site-monitoria.git
```

Acesse o diretório:

```bash
cd site-monitoria
```

Abra o arquivo `index.html` no navegador.

---

## ▶️ Uso <a id="uso"></a>

Navegue pelo menu lateral para acessar:

- Informações sobre a monitoria  
- Conteúdos teóricos com exemplos em pseudocódigo  
- Links para download das listas de exercícios  
- Horários presenciais e online  
- Informações de contato  

---

## ✨ Funcionalidades <a id="funcionalidades"></a>

- 📚 Organização do conteúdo da disciplina  
- 🖥️ Exemplos de pseudocódigo com blocos formatados  
- 📂 Links de exercícios para prática  
- ⏰ Exibição clara de horários de monitoria  
- 📱 Layout responsivo utilizando **CSS Grid** e **Flexbox**  

---

## 🛠️ Tecnologias Utilizadas <a id="tecnologias-utilizadas"></a>

- **HTML5** → Estrutura semântica e esqueleto do site.
- **CSS3 (Flexbox e Grid)** → Estilização completa, modularização do design (via `styles/`) e implementação de layout responsivo.
- **JavaScript (ES6)** → Lógica de roteamento dinâmico do menu, gerenciamento de estado do layout (mostra/esconde seções) e carregamento assíncrono do conteúdo.
- **marked.js** → Biblioteca utilizada para interpretar e renderizar o conteúdo dos arquivos Markdown (`.md`) em HTML diretamente no frontend.
- **JSON (`conteudos.json`)** → Utilizado como fonte de dados para estruturar o menu e mapear os arquivos de conteúdo de forma organizada.
- **Google Fonts (Geist, Geist Mono)** → Tipografia.

---

## 💡 Arquitetura de Conteúdo <a id="arquitetura"></a>

O projeto foi concebido como um **Site Estático de Alto Desempenho (SPA-like)**, priorizando a facilidade de manutenção e a escalabilidade do material didático:

* **Carregamento Dinâmico (JS Puro):** O arquivo `main.js` orquestra o carregamento de dados do `conteudos.json`. Ele simula a navegação de uma Single Page Application (SPA), buscando e renderizando o conteúdo de cada tópico (arquivos **Markdown** na pasta `conteudo/`) em tempo real. Utilizamos o `marked.js` para essa conversão.
* **Modularização de CSS:** A estilização segue uma abordagem modular, utilizando arquivos dedicados por componente (`cabecalho.css`, `menu.css`, etc.) importados via `@import` no `main.css`. Essa estrutura, junto com o uso de **CSS Grid** e **Flexbox** (vistos nos arquivos `menu.css` e `footer.css`), facilita a organização, a manutenção e a adaptação futura do layout.
* **Assets Leves:** A pasta `img/` contém 16 ícones em formato SVG, priorizando a performance e o carregamento rápido da interface.

---

## 🗺️ Próximos Passos (Roadmap) <a id="roadmap"></a>

O projeto possui um planejamento de melhorias contínuas focado em performance, organização de código e experiência do usuário:

1.  **Refatoração do JavaScript:** Organizar o `main.js` em módulos mais concisos, movendo-os para a pasta `scripts/` para melhor separação de responsabilidades.
2.  **Responsividade Total:** Finalizar o ajuste do layout para garantir a melhor experiência em mobile.
3.  **Experiência do Usuário (UX):** Implementação do **Modo Escuro** e adição de **Animações de Transição** para uma navegação mais fluída.
4.  **Adição de mais conteúdo didático:** Adicionar mais conteúdo baseado nas aulas do curso, além de conteúdo extra sobre o assunto.

---

## 🤝 Contribuição <a id="contribuicao"></a>

Contribuições são bem-vindas!  
Sugestões de melhorias podem ser feitas via **issues** ou **pull requests**.

---

## 📜 Licença <a id="licenca"></a>

Este projeto está sob a licença **MIT**.  
Você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha a referência original.

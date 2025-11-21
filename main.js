const subMenu = document.getElementById('submenu');
const secaoDisciplina = document.getElementById("conteudo-disciplina");
const setaSubMenu = document.getElementById('seta-algoritmos');

let secaoAtiva;
let artigoAtivo;

function toggleSubMenu(){
        setaSubMenu.classList.toggle('seta__rodada');
        subMenu.classList.toggle('submenu__aparece');
}

function abreSubMenu(){
    setaSubMenu.classList.add('seta__rodada');
    subMenu.classList.add('submenu__aparece');
}

function fechaSubMenu(){
    setaSubMenu.classList.remove('seta__rodada');
    subMenu.classList.remove('submenu__aparece');
}

function MostraSecao(sectionId) {
    const novaSecao = document.getElementById(sectionId);
    if (novaSecao !== secaoAtiva){
        secaoAtiva.style.display = 'none';
        novaSecao.style.display = 'block';
        secaoAtiva = novaSecao;
        scrollTo(0,0);
    }
}

function MostraArtigo(articleId) {
    const novoArtigo = document.getElementById(articleId);
    if (novoArtigo !== artigoAtivo){
        artigoAtivo.style.display = 'none';
        novoArtigo.style.display = 'block';
        artigoAtivo = novoArtigo;

        document.getElementById('titulo-conteudo').textContent = novoArtigo.dataset.titulo

        scrollTo(0,0);
    }
}

async function carregarConteudos(){
    const resposta = await fetch("conteudos.json");
    const dados = await resposta.json();

    for(const item of dados.conteudos){
        const article = document.createElement('article');
        article.classList.add('conteudo__artigo');
        article.id = 'conteudo-' + item.id;
        article.style.display = 'none';
        article.dataset.titulo = item.titulo;
        const conteudoMD = await (await fetch(item.arquivo)).text();
        article.innerHTML =  marked.parse(conteudoMD);
        secaoDisciplina.appendChild(article);

        if(item.id === 'visaogeral'){
            continue;
        }
        const li = document.createElement('li');
        li.classList.add('submenu__item');
        li.id = 'menu-' + item.id;
        li.textContent = item.titulo; 
        subMenu.appendChild(li);
    }
}

function inicializarEventos(){
    const botoesMenu = document.querySelectorAll('.menu__item');
    const botoesSubMenu = document.querySelectorAll('.submenu__item');
    const botaoAlgoritmos = document.getElementById('menu-disciplina');

    secaoAtiva = document.getElementById('conteudo-sobre');
    secaoAtiva.style.display = 'block';
    artigoAtivo = document.getElementById('conteudo-visaogeral');
    artigoAtivo.style.display = 'block';
    document.getElementById('menu-sobre').classList.add('item__ativo');

    setaSubMenu.addEventListener('click', function(event){
        event.stopPropagation();
        toggleSubMenu();
    });

    botoesMenu.forEach(botao => {
        botao.addEventListener('click', function(){
            botoesMenu.forEach(botao => {
                botao.classList.remove('item__ativo');
            });
            botoesSubMenu.forEach(botao => {
                botao.classList.remove('submenu__ativo');
            });
            botao.classList.add('item__ativo');
            const idBotao = botao.id.replace('menu', 'conteudo');
            MostraSecao(idBotao);
            if(idBotao === 'conteudo-disciplina'){
                MostraArtigo('conteudo-visaogeral');
                abreSubMenu();
            }else{
                fechaSubMenu();
            } 
        });
    });

    botoesSubMenu.forEach(botao => {
        botao.addEventListener('click', function(){
            botoesMenu.forEach(botao => {
                botao.classList.remove('item__ativo');
            });
            botaoAlgoritmos.classList.add('item__ativo');
            botoesSubMenu.forEach(botao => {
                botao.classList.remove('submenu__ativo');
            });
            botao.classList.add('submenu__ativo');
            const idBotao = botao.id.replace('menu', 'conteudo');
            MostraArtigo(idBotao);
            MostraSecao('conteudo-disciplina');   
        });
    });
}

async function iniciar(){
    await carregarConteudos();
    inicializarEventos();
}

iniciar();
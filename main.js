const botoesMenu = document.querySelectorAll('.menu__item');
const botoesSubMenu = document.querySelectorAll('.submenu__item');

const botaoAlgoritmos = document.getElementById('menu-algoritmos')
const setaSubMenu = document.getElementById('seta-algoritmos');
const subMenu = document.getElementById('submenu');

const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-algoritmos'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info')
];

const artigos = [
    document.getElementById('conteudo-placeholder'),
    document.getElementById('conteudo-estruturas-controle'), 
    document.getElementById('conteudo-ordenacao'),
    document.getElementById('conteudo-estrutura-dados')
];

let secaoAtiva = document.getElementById('conteudo-sobre');
secaoAtiva.style.display = 'block';
let artigoAtivo = document.getElementById('conteudo-placeholder');
artigoAtivo.style.display = 'block';

document.getElementById('menu-sobre').classList.add('item__ativo');

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
    }
}

function MostraArtigo(articleId) {
    const novoArtigo = document.getElementById(articleId);
    if (novoArtigo !== artigoAtivo){
        artigoAtivo.style.display = 'none';
        novoArtigo.style.display = 'block';
        artigoAtivo = novoArtigo
    }
}

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
        if(idBotao === 'conteudo-algoritmos'){
            MostraArtigo('conteudo-placeholder');
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
        MostraSecao('conteudo-algoritmos');   
    });
});
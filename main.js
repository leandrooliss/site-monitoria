const botoesMenu = document.querySelectorAll('.menu__item');
const botoesSubMenu = document.querySelectorAll('.submenu__item');

const botaoAlgoritmos = document.getElementById('menu-disciplina')
const setaSubMenu = document.getElementById('seta-algoritmos');
const subMenu = document.getElementById('submenu');

const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-disciplina'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info')
];

const artigos = [
    document.getElementById('conteudo-visaogeral'),
    document.getElementById('conteudo-algoritmos'), 
    document.getElementById('conteudo-logica'),
    document.getElementById('conteudo-estrutura-controle')
];

let secaoAtiva = document.getElementById('conteudo-sobre');
secaoAtiva.style.display = 'block';
let artigoAtivo = document.getElementById('conteudo-visaogeral');
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
        scrollTo(0,0);
    }
}

function MostraArtigo(articleId) {
    const novoArtigo = document.getElementById(articleId);
    if (novoArtigo !== artigoAtivo){
        artigoAtivo.style.display = 'none';
        novoArtigo.style.display = 'block';
        artigoAtivo = novoArtigo
        scrollTo(0,0);
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
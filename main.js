const botoesMenu = document.querySelectorAll('.menu__item, .sublista__item');
const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-algoritmos'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info'),
    document.getElementById('conteudo-placeholder'),
    document.getElementById('conteudo-estruturas-controle'), 
    document.getElementById('conteudo-ordenacao'),
    document.getElementById('conteudo-estrutura-dados')
];

const setaAlgoritmos = document.getElementById('seta-algoritmos');
const sublista = document.getElementById('menu-sublista');

document.getElementById('menu-sobre').classList.add('item__ativo');
let secaoAtiva = document.getElementById('conteudo-sobre');
secaoAtiva.style.display = 'block';

function toggleSubmenu(){
    sublista.classList.toggle('sublista__aparece');
    setaAlgoritmos.classList.toggle('seta__rodada');
}

function abreSubmenu(){
    sublista.classList.add('sublista__aparece');
    setaAlgoritmos.classList.add('seta__rodada');
}

function fechaSubmenu(){
    sublista.classList.remove('sublista__aparece');
    setaAlgoritmos.classList.remove('seta__rodada'); 
}

function Mostra(sectionId) {
    const secaoConteudo = document.getElementById('conteudo-algoritmos');
    const secaoPlaceholder = document.getElementById('conteudo-placeholder');
    const secaoClicada = document.getElementById(sectionId);

    if (secaoClicada !== secaoAtiva){
        if(secaoAtiva.tagName === 'ARTICLE'){
            secaoConteudo.style.display = 'none';
        }
        secaoAtiva.style.display = 'none';

        if(secaoClicada.tagName === 'ARTICLE'){
            secaoConteudo.style.display = 'block';
            secaoPlaceholder.style.display = 'none';
            abreSubmenu();
        }else if(secaoClicada.id === 'conteudo-algoritmos'){
            secaoPlaceholder.style.display = 'block';
            abreSubmenu();
        }
        else{
            fechaSubmenu();
        } 
        secaoClicada.style.display = 'block';
        secaoAtiva = secaoClicada;
    }
}

setaAlgoritmos.addEventListener('click', function(event){
    event.stopPropagation();
    toggleSubmenu();
});

botoesMenu.forEach(botao => {
    botao.addEventListener('click', function(){
        botoesMenu.forEach(botao => {
            botao.classList.remove('item__ativo');
            botao.classList.remove('sublista__ativo');
        });
        if(botao.classList.contains('menu__item')){
            botao.classList.add('item__ativo');
        }else{
            const menuConteudo = document.getElementById('menu-algoritmos');
            menuConteudo.classList.add('item__ativo');
            botao.classList.add('sublista__ativo');
        }
        const idBotao = botao.id.replace('menu', 'conteudo');
        Mostra(idBotao);   
    });
});


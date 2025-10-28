const botoesMenu = document.querySelectorAll(".menu__item");
const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-algoritmos'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info')
];
const botoesSubMenu = document.querySelectorAll(".sublista__item");
const artigos = [
    document.getElementById('conteudo-landing'),
    document.getElementById('conteudo-estruturas-controle'), 
    document.getElementById('conteudo-ordenacao'),
    document.getElementById('conteudo-estrutura-dados')
]

function VerificaDisplay() {
    let ativo;
    secoes.forEach(element => {
        if (getComputedStyle(element).display === 'block')
            ativo =  element;
    });
    return ativo;
}

function VerificaDisplayConteudo() {
    let ativo;
    artigos.forEach(element => {
        if (getComputedStyle(element).display === 'block')
            ativo =  element;
    });
    return ativo;
}

function Mostra(sectionId) {
    let ativo = VerificaDisplay();
    if (document.getElementById(sectionId) != ativo){
        document.getElementById(sectionId).style.display = 'block';
        ativo.style.display = 'none';
    }
}

function MostraConteudo(articleId) {
    let ativo = VerificaDisplayConteudo();
    if (document.getElementById(articleId) != ativo){
        document.getElementById(articleId).style.display = 'block';
        ativo.style.display = 'none';
    }
}

botoesMenu.forEach(botao => {
    botao.addEventListener("click", function(){
        botoesMenu.forEach(botao => {
            botao.classList.remove("item__ativo");
        });
        botao.classList.add("item__ativo");
        const idBotao = botao.id.replace("menu", "conteudo");
        Mostra(idBotao);   
    });
});

botoesSubMenu.forEach(botao => {
    botao.addEventListener("click", function(){
        botoesSubMenu.forEach(botao => {
            botao.classList.remove("sublista__selecionado");
        });
        botao.classList.add("sublista__selecionado");
        const idBotao = botao.id.replace("menu", "conteudo");
        MostraConteudo(idBotao);   
    });
});
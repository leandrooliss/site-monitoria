const botoesMenu = document.querySelectorAll(".menu__item");
const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-algoritmos'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info')
];

function VerificaDisplay() {
    let ativo;
    secoes.forEach(element => {
        if (getComputedStyle(element).display === 'block')
            ativo =  element;
    });
    return ativo;
}

function Mostra(sectionId) {
    var ativo = VerificaDisplay();
    if (document.getElementById(sectionId) != ativo){
        document.getElementById(sectionId).style.display = 'block';
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


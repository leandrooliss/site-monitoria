const secoes = [
    document.getElementById('conteudo__sobre'), 
    document.getElementById('conteudo__algoritmos'),
    document.getElementById('conteudo__exercicios'),
    document.getElementById('conteudo__info')
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
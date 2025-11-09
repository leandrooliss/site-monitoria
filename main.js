// ELEMENTOS PRINCIPAIS -------------------------------------------------------------

const botoesMenu = document.querySelectorAll('.menu__item');

const botaoAlgoritmos = document.getElementById('menu-disciplina')
const setaSubMenu = document.getElementById('seta-algoritmos');
const subMenu = document.getElementById('submenu');

// Todas as seções principais (controladas pelos botões do menu lateral)
const secoes = [
    document.getElementById('conteudo-sobre'), 
    document.getElementById('conteudo-disciplina'),
    document.getElementById('conteudo-exercicios'),
    document.getElementById('conteudo-info')
];

// Define seção inicia visível
let secaoAtiva = document.getElementById('conteudo-sobre');
secaoAtiva.style.display = 'block';

//Inicializa artigoAtivo como null (vai ser definido depois)
let artigoAtivo = null;

//Flag pra garantir que os artigos só sejam carregados uma vez
if (!window.__artigosCarregados) window.__artigosCarregados = false;


// CARREGAMENTO AUTOMÁTICO DE ARTIGOS E SUBMENU ---------------------------------------
async function carregaArtigos() {
    if (window.__artigosCarregados) return; //evita duplicar conteúdo
    try {
        const resposta = await fetch('conteudos/index.json');
        const dados = await resposta.json();

        const container = document.getElementById('conteudo-disciplina');
        container.innerHTML = '';//limpa o conteúdo anterior

        subMenu.innerHTML = '';// limpa o submenu antes de recriar

        // Cria artigos e itens de submenu com base no index.json
        for (const post of dados.posts) {
            // Cria o artigo, além de colocar classe e id
            const artigo = document.createElement('article');
            artigo.classList.add('conteudo__artigo');
            artigo.id = `conteudo-${post.id}`;
            artigo.style.display = 'none'; //começa invisível

            //adiciona um titulo enquanto carrega o conteúdo
            artigo.innerHTML = `<h3>${post.titulo}</h3><p>Carregando conteúdo...</p>`;
            container.appendChild(artigo);

            //Carrega o markdown e converte em HTML
            const markdown = await fetch(`conteudos/${post.arquivo}`).then(r => r.text());
            const html = marked.parse(markdown);

            //Substitui o conteudo do artigo pelo markdown convertido
            artigo.innerHTML = html;

            // Cria o botão do submenu automaticamente
            const botao = document.createElement('li');
            botao.classList.add('submenu__item');
            botao.id = `menu-${post.id}`;
            botao.textContent = post.titulo;
            subMenu.appendChild(botao);
            }

            //marca flag pra não carregar
            window.__artigosCarregados = true;

    } catch (erro) {
        console.log('Erro ao carregar artigos:', erro);
    }
}

// EVENTOS DO SUBMENU ---------------------------------------------------------------

// Usa delegação de evento -- detecta cliques em itens criados dinamicamente
subMenu.addEventListener('click', (event) => {
    const li = event.target.closest('.submenu__item');
    if (!li) return;

    // Remove ativo dos menus principais e marca o 'Conteúdo da Disciplina'
    botoesMenu.forEach(btn => btn.classList.remove('item__ativo'));
    botaoAlgoritmos.classList.add('item__ativo');

    // Atualiza qual submenu está ativo
    document.querySelectorAll('.submenu__item').forEach(btn => btn.classList.remove('submenu__ativo'));
    li.classList.add('submenu__ativo');

    // Mostra o artigo correspondente
    const idPost = li.id.replace('menu-', 'conteudo-');
    MostraArtigo(idPost);
    MostraSecao('conteudo-disciplina'); //Corrigido: 'disciplina'
});

// EVENTOS DO MENU PRINCIPAL ---------------------------------------------------------

setaSubMenu.addEventListener('click', function(event){
    event.stopPropagation();
    toggleSubMenu();
});

botoesMenu.forEach(botao => {
    botao.addEventListener('click', function(){
        // Remove ativo de todos
        botoesMenu.forEach(botao => {
            botao.classList.remove('item__ativo');
        });
        document.querySelectorAll('.submenu__item').forEach(b => b.classList.remove('submenu__ativo'));
        botao.classList.add('item__ativo');

        const idBotao = botao.id.replace('menu', 'conteudo');
        MostraSecao(idBotao);

        // Abre submenu se for a seção de disciplina
        if(idBotao === 'conteudo-disciplina'){
            if (!artigoAtivo) {
                artigoAtivo = document.querySelector('#conteudo_disciplina article');
            }
            if (artigoAtivo) artigoAtivo.style.display = 'block';
            abreSubMenu();
        }else{
            fechaSubMenu();
        } 
    });
});

// FUNÇÕES DE CONTROLE DE SEÇÕES E ARTIGOS ----------------------------------------

// Mostra uma nova seção (oculta a antirior)
function MostraSecao(sectionId) {
    const novaSecao = document.getElementById(sectionId);
    if (!novaSecao) return;
    if (novaSecao !== secaoAtiva){
        secaoAtiva.style.display = 'none';
        novaSecao.style.display = 'block';
        secaoAtiva = novaSecao;
        scrollTo(0,0);
    }
}

// Mostra o artigo correspondente ao submenu clicado
function MostraArtigo(articleId) {
    const novoArtigo = document.getElementById(articleId);
    if (!novoArtigo) return;

    //se ainda não temos artigoAtivo (primeiro uso), define um escondendo 
    // qualquer outro articlevisível
    if (!artigoAtivo) {
        const visiveis = document.querySelectorAll('#conteudo-disciplina article');
        visiveis.forEach(a => a.style.display = 'none');
        novoArtigo.style.display = 'block';
        artigoAtivo = novoArtigo;
        scrollTo(0,0);
        return;
    }

    if (novoArtigo !== artigoAtivo){
        artigoAtivo.style.display = 'none';
        novoArtigo.style.display = 'block';
        artigoAtivo = novoArtigo
        scrollTo(0,0);
    }
}

// CONTROLE DE VISIBILIDADE DO SUBMENU ---------------------------------------------

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

// INICIALIZAÇÃO -------------------------------------------------------------------

/* 
Quando o site carrega:
    - Puxa os artigos (markdowns)
    - Mostra o primeiro ("Visão Geral") por padrão
 */

document.addEventListener('DOMContentLoaded', async () =>{
    await carregaArtigos();

    artigoAtivo = document.getElementById('conteudo-visaogeral');
    if (artigoAtivo) artigoAtivo.style.display = 'block';
});
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está organizando uma apresentação sobre sustentabilidade em sua escola. O tema exige informações precisas e atualizadas sobre práticas ecológicas. Como você se prepara para essa tarefa?",
        alternativas: [
            {
                texto: "Conseguiu coletar informações específicas e concisas com a ajuda da IA, facilitando a preparação da apresentação. Busca fontes tradicionais como livros, sites confiáveis e consulta especialistas no tema, coletando dados para organizar a apresentação.",
                afirmacao: " Conseguiu produzir uma apresentação sólida com base em fontes confiáveis e informações mais detalhadas."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Conseguiu produzir uma apresentação sólida com fontes confiáveis e informações detalhadas."
            }
        ]
    },
    {
        enunciado: "Você está desenvolvendo um projeto de arte digital para a escola e deseja criar imagens impactantes para ilustrar o tema. Como você escolhe a melhor abordagem??",
        alternativas: [
            {
                texto: "Usa uma ferramenta de IA para gerar imagens criativas baseadas no tema proposto, experimentando diferentes estilos artísticos até encontrar o mais adequado.",
                afirmacao: "A IA foi essencial para criar imagens únicas e interessantes, economizando tempo e ampliando as ideias criativas."
            },
            {
                texto: " Trabalha em seu projeto de arte utilizando ferramentas tradicionais de design, como softwares de edição e sua própria habilidade artística, para criar as imagens manualmente.",
                afirmacao: "O processo manual deu mais controle sobre os detalhes e expressão artística do seu projeto"
            }
        ]
    },
    {
        enunciado: "Você foi convidado para participar de uma feira de ciências, onde a inovação tecnológica é um dos temas principais. Como você se prepara para criar um projeto inovador??",
        alternativas: [
            {
                texto: "Pesquisa sobre inovações tecnológicas atuais e usa IA para analisar tendências e sugerir ideias criativas, auxiliando na estruturação do projeto.",
                afirmacao: "A IA ampliou as opções de ideias inovadoras e otimizou o desenvolvimento do projeto"
            },
            {
                texto: " Baseia seu projeto em experimentos científicos e ideias clássicas de inovação, complementando com sua própria pesquisa e experiências práticas.",
                afirmacao: "A experiência prática e a pesquisa direta foram fundamentais para o sucesso do projeto."
            }
        ]
    },
    {
        enunciado: "Você tem que criar um cronograma de estudo para se preparar para um exame importante. Como você organiza sua rotina de estudo?",
        alternativas: [
            {
                texto: "Utiliza um aplicativo de IA para criar um cronograma de estudo personalizado, ajustando os horários e conteúdos com base na sua disponibilidade e pontos mais fracos.",
                afirmacao: "A IA otimizou sua rotina de estudos, criando um plano eficiente e adaptado às suas necessidades."
            },
            {
                texto: "Organiza seu próprio cronograma com base nas matérias que considera mais difíceis e nas que tem maior facilidade, sem a ajuda de ferramentas externas.",
                afirmacao: "Sentiu que o método tradicional de organização foi mais flexível e personalizado para o seu ritmo de aprendizado."
            }
        ]
    },
    {
        enunciado: "Você precisa escrever uma redação sobre o impacto das redes sociais na sociedade. Como você estrutura sua pesquisa?? ",
        alternativas: [
            {
                texto: "Pesquisa em artigos acadêmicos e usa ferramentas baseadas em IA para sintetizar as informações mais importantes sobre o impacto das redes sociais, com foco em diferentes pontos de vista.",
                afirmacao: "A IA foi essencial para reunir fontes variadas e sintetizar as informações de forma objetiva e relevante para a redação."
            },
            {
                texto: "Realiza uma pesquisa própria, conversando com pessoas sobre o tema e consultando livros e artigos para construir a redação com base em sua própria análise.",
                afirmacao: " A pesquisa direta e as trocas de ideias com outras pessoas agregaram um valor único à sua redação."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

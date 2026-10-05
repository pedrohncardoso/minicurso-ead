const quizData = [
    {
        question: "1. Ao planejar um material educacional multimodal sobre 'Lógica de Programação', qual destas práticas respeita o Princípio da Coerência (Richard Mayer)?",
        options: [
            "Colocar 3 parágrafos de texto denso em um slide e narrar o mesmo texto palavra por palavra no áudio.",
            "Garantir que a imagem escolhida, o texto e o áudio se complementem, removendo enfeites visuais que não ensinam nada.",
            "Usar o máximo de animações, GIFs coloridos e efeitos sonoros para prender a atenção do aluno a todo custo."
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: "Exatamente! O Princípio da Coerência diz que materiais estranhos (textos, imagens ou sons que não contribuem para o objetivo de aprendizagem) devem ser excluídos para não sobrecarregar o cérebro.",
        feedbackWrong: "Incorreto. O Princípio da Coerência ensina justamente o oposto: menos é mais. Devemos remover imagens, gifs ou sons que não ajudam no aprendizado, pois eles causam sobrecarga cognitiva."
    },
    {
        question: "2. Como a ferramenta Audacity pode agregar valor à produção de conteúdos educacionais de forma acessível?",
        options: [
            "Ela permite criar gráficos em 3D complexos para aulas de biologia.",
            "Ela gera automaticamente legendas e textos a partir de um vídeo do YouTube.",
            "Ela permite gravar e tratar o áudio, como remover ruídos de fundo, sendo ideal para criar locuções limpas ou podcasts."
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: "Correto! O Audacity é um excelente software gratuito focado na edição de áudio. Áudios com ruído atrapalham o aprendizado, e tratá-los é essencial para um conteúdo multimodal de qualidade.",
        feedbackWrong: "Isso não está correto. O Audacity não gera legendas e nem cria gráficos. Ele é um software focado na edição e gravação de arquivos de áudio (podcasts, locuções, etc)."
    },
    {
        question: "3. Você usou uma Inteligência Artificial para gerar um texto explicativo e depois montou um slide no Canva. Ao revisar o material, você nota que a fonte está cinza-claro sobre um fundo branco. Qual o problema de design instrucional aqui?",
        options: [
            "Falta de contraste e legibilidade, o que prejudica muito a acessibilidade visual e o foco do aluno.",
            "A fonte cinza é considerada muito agressiva para materiais educacionais.",
            "Nenhum problema, fontes claras em fundos claros passam uma imagem minimalista e moderna que facilita o estudo."
        ],
        correctAnswerIndex: 0,
        feedbackCorrect: "Perfeito! A clareza é fundamental. Sem um bom contraste (como letra preta em fundo branco), o aluno faz esforço visual desnecessário, prejudicando a leitura e a inclusão.",
        feedbackWrong: "Pense na acessibilidade. Letras claras em fundos claros não têm contraste suficiente. Isso torna a leitura cansativa e exclui alunos com qualquer dificuldade visual."
    },
    {
        question: "4. Ao criar um vídeo educacional, o que o 'Princípio da Modalidade' sugere para explicar uma imagem complexa na tela?",
        options: [
            "Usar áudio narrado para explicar a imagem, evitando colocar textos longos concorrendo pela atenção visual.",
            "Colocar o máximo de texto na tela junto com a imagem, para que o aluno leia enquanto tenta entender o desenho.",
            "Evitar usar o canal auditivo, deixando a página em silêncio absoluto para aumentar o foco."
        ],
        correctAnswerIndex: 0,
        feedbackCorrect: "Exato! O Princípio da Modalidade diz que o cérebro processa melhor uma imagem se a explicação for em ÁUDIO, em vez de texto na tela, evitando sobrecarregar o canal visual.",
        feedbackWrong: "Na verdade é o contrário. Se você tem uma imagem complexa e um texto complexo na mesma tela, o canal visual do aluno sofre sobrecarga. A solução é passar o texto para o formato de áudio (narração)."
    },
    {
        question: "5. Se você precisar gerar rapidamente o roteiro (script) de um podcast educativo sobre Segurança da Informação, qual ferramenta é a mais indicada?",
        options: [
            "O editor de imagens do Canva.",
            "O equalizador do Audacity.",
            "Assistentes de IA generativa de texto (como o ChatGPT, Claude ou Gemini)."
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: "Isso mesmo! Ferramentas de IA baseadas em LLM (Large Language Models) são excelentes para organizar ideias e redigir roteiros rapidamente.",
        feedbackWrong: "Incorreto. Canva é para design e imagens, Audacity é para edição de áudio. Para gerar 'textos e roteiros', as IAs generativas de texto são a ferramenta correta."
    },
    {
        question: "6. Durante a revisão de um material multimodal, o que significa checar a 'coerência' entre as mídias?",
        options: [
            "Garantir que a imagem seja bonita, mesmo que não tenha nenhuma relação com o texto ensinado.",
            "Verificar se o áudio, o texto e a imagem estão transmitindo informações que se complementam rumo ao mesmo objetivo.",
            "Assegurar que o arquivo final tenha um tamanho pequeno em megabytes."
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: "Exatamente. A coerência significa que todas as partes do material (visual, sonoro, textual) conversam entre si e empurram o aluno para a mesma meta de aprendizagem.",
        feedbackWrong: "A coerência não é sobre estética vazia ou tamanho do arquivo. É sobre alinhamento pedagógico: a imagem deve ilustrar o que o áudio/texto ensina, e vice-versa."
    },
    {
        question: "7. Ao incluir imagens da internet em um slide de aula, qual deve ser a sua preocupação ética?",
        options: [
            "Nenhuma, materiais educacionais estão livres de regras de direitos autorais.",
            "Sempre buscar imagens com licenças abertas (Creative Commons), banco de imagens gratuito (Canva/Unsplash) ou criadas por IA.",
            "Baixar a primeira imagem do Google, desde que ela tenha boa resolução."
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: "Muito bem! O uso ético de mídias é vital. Usar bancos de imagens, ferramentas de design (como Canva) ou gerar imagens com IA resolve problemas de direitos autorais.",
        feedbackWrong: "Você não pode simplesmente pegar qualquer imagem do Google, pois a maioria possui direitos autorais protegidos. O correto é usar bancos de imagem (como do Canva) ou licenças Creative Commons."
    },
    {
        question: "8. Qual prática torna um vídeo educacional mais inclusivo (acessível) para pessoas surdas ou que estudam em ambientes barulhentos?",
        options: [
            "Colocar uma música de fundo bem alta.",
            "Incluir Legendas (Closed Captions) e disponibilizar a transcrição em texto.",
            "Falar bem devagar durante o vídeo."
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: "Perfeito! A multimodalidade também atende à acessibilidade. O áudio acompanhado de legenda permite que mais pessoas consumam e entendam o conteúdo.",
        feedbackWrong: "Apenas falar devagar não ajuda quem não consegue ouvir (seja por deficiência auditiva ou por estar no ônibus sem fone de ouvido). A inserção de legendas/textos de apoio é essencial."
    },
    {
        question: "9. Para que a IA não gere um texto genérico ou superficial, como o professor deve atuar ao escrever o 'prompt' (comando)?",
        options: [
            "Dar comandos muito curtos como 'Escreva sobre computação'.",
            "Contextualizar o público-alvo, o tom de voz e o objetivo educacional específico antes de pedir a geração do texto.",
            "A IA já sabe tudo, não é necessário fornecer contexto."
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: "Isso aí. O design instrucional moderno exige a habilidade de criar bons prompts. Quanto mais específico o professor for, melhor e mais útil será o material gerado pela IA.",
        feedbackWrong: "Comandos curtos ou falta de contexto geram respostas ruins ou superficiais. O professor precisa dar o contexto (público-alvo, formato, objetivo)."
    },
    {
        question: "10. Segundo o 'Princípio da Redundância' na aprendizagem multimídia, devemos evitar qual prática?",
        options: [
            "Apresentar simultaneamente uma narração em áudio E um texto longo idêntico na tela para acompanhar uma animação.",
            "Colocar imagens junto com o texto.",
            "Repetir a mesma aula em dias diferentes."
        ],
        correctAnswerIndex: 0,
        feedbackCorrect: "Isso! Narrar em voz alta um texto denso que já está na tela, junto com gráficos complexos, cria redundância desnecessária e atrapalha a capacidade do aluno de absorver o conteúdo visual.",
        feedbackWrong: "A Redundância na multimídia ocorre quando entregamos a mesma informação em canais concorrentes (ex: ler o texto idêntico que está na tela enquanto há gráficos para olhar), o que causa cansaço cognitivo."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizApp = document.getElementById('quiz-app');

// Inicializa o botão de start
document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
}

function renderQuestion() {
    const questionData = quizData[currentQuestionIndex];
    
    // Constrói o HTML da pergunta
    let html = `
        <div class="quiz-question-container">
            <h3 class="quiz-question-text">${questionData.question}</h3>
            <div class="quiz-options">
    `;

    questionData.options.forEach((option, index) => {
        html += `<button class="quiz-option" onclick="selectOption(${index})">${option}</button>`;
    });

    html += `
            </div>
            <div id="quiz-feedback" class="quiz-feedback"></div>
            <div class="quiz-footer">
                <span class="quiz-progress">Pergunta ${currentQuestionIndex + 1} de ${quizData.length}</span>
                <button id="next-btn" class="btn-primary" style="display: none;" onclick="nextQuestion()">Próxima ➔</button>
            </div>
        </div>
    `;

    quizApp.innerHTML = html;
}

window.selectOption = function(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];
    const optionsButtons = document.querySelectorAll('.quiz-option');
    const feedbackBox = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-btn');

    // Desabilita todos os botões para a pessoa não clicar de novo
    optionsButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedIndex === questionData.correctAnswerIndex);

    if (isCorrect) {
        score++;
        // Pinta o botão clicado de verde
        optionsButtons[selectedIndex].classList.add('correct');
        // Mostra feedback de sucesso
        feedbackBox.classList.add('success');
        feedbackBox.innerHTML = `<strong>Acertou!</strong> ${questionData.feedbackCorrect}`;
    } else {
        // Pinta o botão clicado de vermelho
        optionsButtons[selectedIndex].classList.add('wrong');
        // Pinta o botão que era o certo de verde
        optionsButtons[questionData.correctAnswerIndex].classList.add('correct');
        // Mostra feedback de erro
        feedbackBox.classList.add('error');
        feedbackBox.innerHTML = `<strong>Errou.</strong> ${questionData.feedbackWrong}`;
    }

    // Muda o texto do botão Next se for a última pergunta
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.innerHTML = "Ver Resultado Final ➔";
    }
    
    // Mostra o botão para avançar
    nextBtn.style.display = "block";
}

window.nextQuestion = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let message = "";
    if (score === quizData.length) {
        message = "Excelente! Você domina muito bem a produção de conteúdos multimodais.";
    } else if (score > 0) {
        message = "Bom trabalho! Volte ao vídeo para revisar alguns detalhes importantes.";
    } else {
        message = "Não desanime! Assista ao vídeo novamente com calma, você vai conseguir!";
    }

    const html = `
        <div class="quiz-result-container">
            <h3>Avaliação Concluída!</h3>
            <div class="quiz-score-circle">
                ${score}/${quizData.length}
            </div>
            <p>${message}</p>
            <button class="btn-secondary" onclick="startQuiz()">Tentar Novamente ↺</button>
        </div>
    `;

    quizApp.innerHTML = html;
}

import './styles/maincontent.css'; //importei meu estilo

import Flashcards from './Flashcards';
export default function MainContent() {
    const deck = [{
        question: 1,
        perguntafrente: "O que é JSX?",
        perguntatras:"Uma extensão de linguagem do JavaScript",
    },
    {   
        question: 2,
        perguntafrente: "O React é __ ",
        perguntatras:"uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question: 3,
        perguntafrente: "Componentes devem iniciar com  __ ",
        perguntatras:"letra maiúscula",
    },
    {
        question: 4,
        perguntafrente: "Podemos colocar __ dentro do JSX",
        perguntatras:"expressões",
    },
    {
        question: 5,
        perguntafrente: "O ReactDOM nos ajuda __",
        perguntatras: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: 6,
        perguntafrente: "Usamos o npm para __",
        perguntatras: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        question: 7,
        perguntafrente: "Usamos props para __",
        perguntatras: "passar diferentes informações para componentes ",
    },
    {
        question: 8,
        perguntafrente: " Usamos estado (state) para __",
        perguntatras: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
    ];

  return (
    <div className='content'>
        {deck.map(deck => <Flashcards 
            questionNro={deck.question}
            frontCard={deck.perguntafrente}
            backCard={deck.perguntatras}
        />)}

    </div>
  );
}
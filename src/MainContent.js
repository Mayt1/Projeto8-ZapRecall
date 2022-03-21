import './styles/maincontent.css'; //importei meu estilo

import Flashcards from './Flashcards';
export default function MainContent() {
    const deck = [{
        perguntafrente: "O que é JSX?",
        perguntatras:"Uma extensão de linguagem do JavaScript",
    },
    {   
        perguntafrente: "O React é __ ",
        perguntatras:"uma biblioteca JavaScript para construção de interfaces",
    },
    {
        perguntafrente: "Componentes devem iniciar com  __ ",
        perguntatras:"letra maiúscula",
    },
    {
        perguntafrente: "Podemos colocar __ dentro do JSX",
        perguntatras:"expressões",
    },
    {
        perguntafrente: "O ReactDOM nos ajuda __",
        perguntatras: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        perguntafrente: "Usamos o npm para __",
        perguntatras: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        perguntafrente: "Usamos props para __",
        perguntatras: "passar diferentes informações para componentes ",
    },
    {
        perguntafrente: " Usamos estado (state) para __",
        perguntatras: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
    ];

  return (
    <div className='content'>
        {deck.map(deck => <Flashcards 
            frontCard={deck.perguntafrente}
            backCard={deck.perguntatras}
        />)}

    </div>
  );
}
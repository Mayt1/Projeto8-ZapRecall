import './styles/maincontent.css';
import setao from './assets/setao.svg';
import setinha from './assets/setinha.svg';
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';

import Flashcards from './Flashcards';
export default function MainContent(props) {
    const deck = [{
        questionStatus: 1,
        perguntafrente: "O que é JSX?",
        perguntatras: "Uma extensão de linguagem do JavaScript",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 2,
        perguntafrente: "O React é __ ",
        perguntatras: "uma biblioteca JavaScript para construção de interfaces",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 3,
        perguntafrente: "Componentes devem iniciar com  __ ",
        perguntatras: "letra maiúscula",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 2,
        perguntafrente: "Podemos colocar __ dentro do JSX",
        perguntatras: "expressões",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 3,
        perguntafrente: "O ReactDOM nos ajuda __",
        perguntatras: "interagindo com a DOM para colocar componentes React na mesma",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 1,
        perguntafrente: "Usamos o npm para __",
        perguntatras: "gerenciar os pacotes necessários e suas dependências",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 2,
        perguntafrente: "Usamos props para __",
        perguntatras: "passar diferentes informações para componentes ",
        questionIcon: `${setao}`,
    },
    {
        questionStatus: 1,
        perguntafrente: " Usamos estado (state) para __",
        perguntatras: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        questionIcon: `${setao}`,
    },
    ];

    return (
        <>
            <div className='content'>
                {deck.map(deck => <Flashcards
                    status={deck.questionStatus}
                    frontCard={deck.perguntafrente}
                    backCard={deck.perguntatras}
                    questionIcon={deck.questionIcon}
                />)}
            </div>
        </>
    );
}

/*callback={(imagem)=> setTotal(resultado.push(image))} */
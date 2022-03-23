import './styles/style.css'
import data from "./../src/data"
import './styles/telagame.css'

import {useState} from "react";

import Flashcards from './Flashcards';
import Icone from './Icone';
import Headers from './Headers';

export default function TelaGame(props) {

  function comparador() {
    return Math.random() - 0.5;
  }
  
  const [respostas, setRespostas] = useState([]);
  const [questoes, setQuestoes] = useState([]);

  function montarFlashcards() {
    if(questoes.length === 0) {
      data.sort(comparador);
      setQuestoes([...data]);
      return <></>;
    }
    else {
      return questoes.map((questao, indice) => {
        const {frente, verso} = questao;
        return <Flashcards
          key={frente + indice}
          indice={indice + 1}
          frente={frente}
          verso={verso}
          aoFinalizar={resposta => setRespostas([...respostas, resposta])}
        />
      })
    }
  }

  function montarFooter() {
    let resultado = <></>;
    
    if(respostas.length === questoes.length && questoes.length > 0) {
      if(!respostas.includes("erro")) {
        resultado =  (
          <div className="resultado">
            <span><Icone icone="festinha" /> Parabéns!</span>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </div>
        ) 
      } else {
        resultado = (
          <div className="resultado">
            <span><Icone icone="triste" /> Putz!</span>
            <p>Ainda faltam alguns...Mas não desanime!</p>
          </div>
        )
      }
    }

    return (
      <>
      {resultado}
      <p>{respostas.length}/{questoes.length} concluídos</p>
        <div className='iconesfooter'>
        { respostas.map(resposta => <Icone icone={resposta} />) }
        </div>
      
      </>
    )
  }

  const flashcards = montarFlashcards();
  const footer = montarFooter();

  return (
    <>
      <Headers />
      <main>
        {flashcards}
      </main>
      <footer>
        {footer}
      </footer>
    </>
  );
}



import * as React from 'react';
import * as ReactDOM from 'react';

import './styles/flashcards.css';
import setao from './assets/setao.svg';
import setinha from './assets/setinha.svg';
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';


export default function Flashcards(props) {
  //if deck foi tal, entao muda o valor do nro de questao
  const nroQuestion = [1,2,3,4,5,6,7];

  const[selected, setSelected] = React.useState(false);

  let imagemurl=props.questionIcon //so muda localmente. n muda la no deck

  function isStatus (valor){
    if(valor === 1){
      imagemurl = correct
      return "question-correct"
    } else if (valor === 2){
      imagemurl = incorrect
      return "question-incorrect"
    } else if (valor === 3){
      imagemurl = atention;
      return "question-atention"
    } else if (valor === 0){
      //TODO:ativa uma funçao que muda o content
      return "question-atention"
    }
  }

  //{props.respostas.map(respostas => <img src={respostas}/>)}

  const css = `question  ${selected ? isStatus(props.status, props.questionIcon) : ""} `

  return (
    <>
        <section className={css} 
          onClick={()=> setSelected(!selected)}>
            <p>Pergunta {props.aux}</p>
            <img src={imagemurl} alt="icone"/>
        </section>

        <section className='questionFront'>
            <p> {props.frontCard}</p>
            <img src={setinha} alt="virar"/>
        </section>

        <section className='questionBack'>
            <p> {props.backCard}</p>
            <div>
              <button className='nao-lembrei'>Não lembrei</button>
              <button className='quase-lembrei'>Quase não lembrei</button>
              <button className='lembrei'>Zap!</button>
            </div>
        </section> 
    </>
  );
}

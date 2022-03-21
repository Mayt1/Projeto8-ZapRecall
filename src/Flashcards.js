
import './styles/flashcards.css';
import setao from './assets/setao.svg';
import setinha from './assets/setinha.svg';
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';


export default function Flashcards(props) {
  //if deck foi tal, entao muda o valor do nro de questao
  const nroQuestion = [1,2,3,4,5,6,7];
/*
  function sda(){
    if(showquestion == false){
      <section>
            <p>Pergunta {nroQuestion}</p>
            <img src={setao} alt="seta"/>
      </section>
    } else {
      <section className='questionFront'>
            <p> {props.perguntafrente}</p>
            <img src={setinha} alt="virar"/>
      </section>
    }
  }
  */

  return (
    <>
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

/*      <section className='question'>
            <p>Pergunta {nroQuestion}</p>
            <img src={setao} alt="seta"/>
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
        
        <section className='question question-atention'>
            <p>Pergunta {nroQuestion}</p>
            <img src={setao} alt="status"/>
        </section>
        
        */

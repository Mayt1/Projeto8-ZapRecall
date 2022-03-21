import logopequeno from './assets/logo-pequeno.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/footer.css'; //importei meu estilo
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';
import React from 'react';

export default function Footer(props) {
    let done = 0;
    let deckSize = 8;

    //botar um if q vai adicionar valores neste array de respostas e entao atualizar o footer, mesma coisa pro done
  return (
    <>
      <footer>
        <p>{done}/{deckSize} CONCLUÍDOS</p>
        <div>
          {props.respostas.map(respostas => <img src={respostas}/>)}
        </div>
      </footer>
    </>
  );
}
import logo from './assets/logo.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/inicial.css'; //importei meu estilo
import * as React from 'react';


export default function TelaInicial(props) {
  
  const [screen, setScreen]= React.useState('Inicial')

  return (
    <div className="inicial">
      <div className="inicial-header">
        <img src={logo} className="inicial-logo" alt="logo" />
        <p>ZapRecall</p>
      </div>
      <section>
        <input type="text" placeholder='Digite sua meta de zaps...'></input>
        <select name="Decks" id="decks" placeholder='Escolha seu deck'>
          <option value="" disabled selected>Escolha seu deck</option>
          <option value="Deck1">Deck1</option>
          <option value="Deck2">Deck2</option>
        </select>
        <button onClick={() => setScreen('GameScreen')}>Iniciar Recall!</button>
      </section>
    </div>
  );
}
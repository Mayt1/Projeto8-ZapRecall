import logo from './assets/logo.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/inicial.css'; //importei meu estilo

export default function TelaInicial() {
  return (
    <div className="inicial">
      <header className="inicial-header">
        <img src={logo} className="inicial-logo" alt="logo" />
        <p>ZapRecall</p>
      </header>
      <section>
        <input type="text" placeholder='Digite sua meta de zaps...'></input>
        <select name="Decks" id="decks" placeholder='Escolha seu deck'>
          <option value="" disabled selected>Escolha seu deck</option>
          <option value="Deck1">Deck1</option>
          <option value="Deck2">Deck2</option>
        </select>
        <button>Iniciar Recall!</button>
      </section>
    </div>
  );
}
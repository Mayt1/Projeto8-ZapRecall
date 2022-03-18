import logo from './assets/logo.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;

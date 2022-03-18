import logopequeno from './assets/logo-pequeno.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/footer.css'; //importei meu estilo

export default function footer() {
    let done = 0;
    let deckSize = 4;

  return (
    <>
      <footer>
        <p>{done}/{deckSize} CONCLUÍDOS</p>
        <div>
            <img src={logopequeno} className="header-logo" alt="logo"/>
            <img src={logopequeno} className="header-logo" alt="logo"/>
            <img src={logopequeno} className="header-logo" alt="logo"/>
            <img src={logopequeno} className="header-logo" alt="logo"/>
        </div>
        
      </footer>
   
    </>
  );
}
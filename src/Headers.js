import logopequeno from './assets/logo-pequeno.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/header.css'; //importei meu estilo

export default function Headers() {
  return (
    <>
      <header>
        
        <img src={logopequeno} className="header-logo" alt="logo"/>
        <p>ZapRecall</p>
      </header>
    
    </>
  );
}
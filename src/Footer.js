import logopequeno from './assets/logo-pequeno.png'; // botei em uma variavel a minha imagem q esta naquele endereço
import './styles/footer.css'; //importei meu estilo
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';

export default function footer() {
    let done = 0;
    let deckSize = 4;
    let respostas= [correct, incorrect, atention];

    //botar um if q vai adicionar valores neste array de respostas e entao atualizar o footer, mesma coisa pro done
  return (
    <>
      <footer>
        <p>{done}/{deckSize} CONCLUÍDOS</p>
        <div>
          {respostas.map(respostas => <img src={respostas}/>)}
        </div>
        
      </footer>
   
    </>
  );
}
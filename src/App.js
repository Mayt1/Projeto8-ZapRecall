import './styles/style.css'

//import TelaInicial from './TelaInicial';

import Headers from './Headers';
import Footer from './Footer';
import MainContent from './MainContent';

//Aqui q vou criar a logica para trocar de telas da tela inicial para os outros componentes

function App() {
  /*return ( 
    <TelaInicial />
  );*/
  return ( 
    <>
      <Headers />
      <MainContent />
      <Footer />
    </>
  );
}



export default App;

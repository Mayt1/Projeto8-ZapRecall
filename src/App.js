import TelaInicial from './TelaInicial';
import Headers from './Headers';
import Footer from './Footer';

import './styles/reset.css'
import './styles/sytle.css'



//Aqui q vou criar a logica para trocar de telas da tela inicial para os outros componentes

function App() {
  /*return ( 
    <TelaInicial />
  );*/
  return ( 
    <>
      <Headers />
      <Footer />
    </>
  );
}



export default App;

import './styles/style.css'



import TelaInicial from './TelaInicial';
import TelaGame from './TelaGame';


import Headers from './Headers';
import Footer from './Footer';
import MainContent from './MainContent';


import setao from './assets/setao.svg';
import setinha from './assets/setinha.svg';
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';
import * as React from 'react';
//Aqui q vou criar a logica para trocar de telas da tela inicial para os outros componentes

function App() {
  
  return ( 
    <> 
      <TelaInicial />)
       <TelaGame />)
    </>

  );
}



export default App;

/*      <Headers />
        <MainContent />
        <Footer respostas={respostas}/> */
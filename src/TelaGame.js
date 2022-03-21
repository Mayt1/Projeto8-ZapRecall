import './styles/style.css'

import Headers from './Headers';
import Footer from './Footer';
import MainContent from './MainContent';



import setao from './assets/setao.svg';
import setinha from './assets/setinha.svg';
import correct from './assets/correct.svg';
import incorrect from './assets/incorrect.svg';
import atention from './assets/atention.svg';
import * as React from 'react';

export default function TelaGame(props) {

    let respostas= [correct, incorrect, atention];

  return (
      <>
        <Headers />
        <MainContent/>
        <Footer respostas={respostas}/>
      </>
        
  );
}
import { ReactComponent as Acerto } from './assets/correct.svg';
import { ReactComponent as Erro } from './assets/incorrect.svg';
import { ReactComponent as Duvida } from './assets/atention.svg';
import { ReactComponent as Play } from './assets/setao.svg';

import Festinha from './assets/party.png';
import Setinha from './assets/setinha.svg';
import Triste from './assets/sad.png';

import "./../src/styles/icone.css";

function Icone (props) {
  const icones = {
    acerto: <Acerto fill="#2FBE34" />,
    erro: <Erro fill="#FF3030" />,
    duvida: <Duvida fill="#FF922E" />,
    play: <Play />,
    setinha: <img src={Setinha} alt="virar" />,
    festinha: <img src={Festinha} alt="festinha" />,
    triste: <img src={Triste} alt="triste" />
  };

  const {icone} = props;
  const css = `Icone ${icone}`;
  return <span className={css}>{icones[icone]}</span>
}

export default Icone;
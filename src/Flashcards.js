
import './styles/flashcards.css'; //importei meu estilo

export default function Flashcards(props) {
  return (
    <>
        <section>
            <p>Pergunta {props.questionNro}</p>
            <ion-icon name="caret-forward-outline"></ion-icon>
        </section>
    </>
  );
}
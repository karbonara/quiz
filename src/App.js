import React from 'react';
import { questions } from './array';
import './index.scss';

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='Картинка' />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'> <button>Попробовать снова</button> </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percent = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={index} >{text}</li>
          ))
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <h1>Тест: какой у вас уровень английского? Проверьте прямо сейчас</h1> : ''
      }
      {
        step !== questions.length ?
          <Game question={question} onClickVariant={onClickVariant} step={step} />
          : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
import './Control.css'
/* INFO */
import questions from './resources/questions.json';
/* COMPONENTS */
import StartApp from './components/StartApp';
import OutcomeApp from './components/OutcomeApp';
import FinalApp from './components/FinalApp';
/* USE STATE */
import { useState } from 'react';

function Control({ transition, timeout, useTransition, setTransition }) {

  const [points, setPoints] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [category, setCategory] = useState('Categorías...');
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isReset, setIsReset] = useState(false);

  const quest = questions[currentCategory][currentQuestion].quest;
  const options = questions[currentCategory][currentQuestion].options;
  const answer = questions[currentCategory][currentQuestion].answer;

  const start = (e) => {
    setupCategory(e)
    transition()
    setTransition(e)
    setTimeout(() => {
      setIsStart(true)
    }, timeout);
  }

  const setupCategory = (e) => {
    setCategory(e.target.textContent)
    switch (e.target.textContent) {
      case 'Películas':
        setCurrentCategory(0)
        break;
      case 'Videojuegos':
        setCurrentCategory(1)
        break;
      case 'NBA':
        setCurrentCategory(2)
        break;
      case 'Música':
        setCurrentCategory(3)
        break;
      default:
        setCurrentCategory(0)
        break;
    }
  }

  const validate = (answer, e) => {

    if (answer === e.target.textContent) { setPoints(points + 1) }

    e.target.classList.add(answer === e.target.textContent ? 'correct' : 'incorrect');

    setPercentage(percentage + 20)

    e.target.parentNode.childNodes.forEach(element => {
      element.classList.add('noclick')
      if (element.textContent === answer) {
        element.classList.add('correct')
      }
    });

    setTimeout(() => {
      if (currentQuestion === questions[currentCategory].length - 1) {
        transition()
        setTimeout(() => {
          setIsFinished(true)
        }, timeout);
      }
      else {
        setCurrentQuestion(currentQuestion + 1)
        e.target.classList.remove('incorrect');
        e.target.classList.remove('correct');
        e.target.parentNode.childNodes.forEach(element => {
          element.classList.remove('correct')
          element.classList.remove('noclick')
        });
      }
    }, 1500);
  }

  const reset = () => {
    setCurrentQuestion(0)
    setPercentage(0)
    setCategory('Categorías...')
    setCurrentCategory(0)
    setIsReset(true)
    transition()
    setTimeout(() => {
      setIsStart(false)
      setIsFinished(false)
      setPoints(0)
    }, timeout);
  }

  if (isFinished) {
    return (
      <>
        <FinalApp
          points={points} 
          reset={reset}
          useTransition={useTransition}
        />
      </>
    );
  }

  if (isStart) {
    return (
      <>
        <OutcomeApp
          percentage={percentage}
          currentQuestion={currentQuestion}
          currentCategory={currentCategory}
          quest={quest}
          isStart={isStart}
          validate={validate}
          answer={answer}
          options={options}
          questions={questions}
          useTransition={useTransition}
        />
      </>
    );
  }

  return (
    <>
      <StartApp
        category={category}
        start={start}
        setupCategory={setupCategory}
        isReset={isReset}
        useTransition={useTransition}
      />
    </>
  );
}

export default Control;
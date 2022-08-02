import './App.css';
import { useEffect, useRef, useState } from 'react';
/* COMPONENTS */
import Control from './Control';
import Transition from './components2/Transition';


function App() {

  const [useTransition, setUseTransition] = useState(false)
  const [transitionStyle, setTransitionStyle] = useState(true)
  const [transitionCategory, setTransitionCategory] = useState('');

  const circle = useRef()

  const timeout = 1600

  const transition = (e) => {
    setUseTransition(true)

    setTimeout(() => {
      setTransitionStyle(false)
    }, timeout);

    setTimeout(() => {
      setTransitionStyle(true)
      setUseTransition(false)
    }, 2800);
  }

  const setTransition = (e) => {
    switch (e.target.textContent) {
      case 'Películas':
        setTransitionCategory('movie')
        break;
      case 'Videojuegos':
        setTransitionCategory('game')
        break;
      case 'NBA':
        setTransitionCategory('basketball')
        break;
      case 'Música':
        setTransitionCategory('music')
        break;
      default:
        setTransitionCategory('')
        break;
    }
  }
  
  useEffect(() => {
    setTimeout(() => {
      circle.current.classList.add('active')
    }, 0);
  }, []);

  return (
    <div className='App'>
      <Transition useTransition={useTransition} transitionStyle={transitionStyle} transitionCategory={transitionCategory} />
      <div ref={circle} className='circle' />
      <Control 
        useTransition={useTransition}
        transition={transition} 
        timeout={timeout} 
        setTransition={setTransition}
        />
    </div>
  );
}

export default App;
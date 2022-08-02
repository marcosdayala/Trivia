import '../styles/StartApp.css'
import { useEffect, useRef } from 'react';

export default function StartApp({ start, isReset, useTransition }) {

  const options_container = useRef()
  const title = useRef()
  const text = useRef()
  const p = useRef()
  
  useEffect(() => {
    setTimeout(() => {
      options_container.current.classList.add('active')
      options_container.current.classList.add('noclick')
      title.current.classList.add('active')
      text.current.classList.add('active')
      p.current.classList.add('active')
    }, 0);
    setTimeout(() => {
      options_container.current.classList.add('transition')
      options_container.current.classList.remove('noclick')
    }, 1500);
  }, []);

  if (isReset) {
    return (
      <div className='beginning_container'>
        <div ref={title} className='beginning_title active'>Trivia</div>
        <div className='beginning_container_content'>
          <div ref={text} className='beginning_text active'>Selecciona una categoría</div>
          <div 
            ref={options_container} onClick={(e) => start(e)}  
            className='options_container active'
            style={useTransition? { pointerEvents: 'none' } : { pointerEvents: '' }}
          >
            <div className='option one'>Películas</div> 
            <div className='option two'>Videojuegos</div>
            <div className='option three'>NBA</div>
            <div className='option four'>Música</div>
          </div>
          <p ref={p} className='beginning_p active'>By <span className='name'>Marcos Ayala</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className='beginning_container'>
      <div ref={title} className='beginning_title'>Trivia</div>
      <div className='beginning_container_content'>
        <div ref={text} className='beginning_text'>Selecciona una categoría</div>
        <div 
          ref={options_container}
          className='options_container'
          style={useTransition? { pointerEvents: 'none' } : { pointerEvents: '' }}
          >
            <div onClick={(e) => start(e)} className='option one'>Películas</div> 
            <div onClick={(e) => start(e)} className='option two'>Videojuegos</div>
            <div onClick={(e) => start(e)} className='option three'>NBA</div>
            <div onClick={(e) => start(e)} className='option four'>Música</div>
        </div>
        <p ref={p} className='beginning_p'>By <span className='name'>Marcos Ayala</span></p>
      </div>
    </div>
  );
}
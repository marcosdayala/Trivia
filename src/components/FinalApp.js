import '../styles/FinalApp.css'

export default function FinalApp({ points, reset, useTransition }) {
  const autenPhrase = () => {
    if (points === 5) { return '¡Felicidades, acertaste todas!' }
    if (points <= 4 && points >= 3) { return '¡Buen intento!' }
    if (points <= 2) { return 'Ooow :(' }
  }
  
  return (
      <div className='container container_final'>
        <p className='title_final'>{autenPhrase()}</p>
        <div className='personPoints_final'>{points}</div>
        <div 
          onClick={() => reset()} 
          style={useTransition? { pointerEvents: 'none' } : { pointerEvents: '' } } 
          className='button_final'>Volver a jugar
        </div>
      </div>
  );
}
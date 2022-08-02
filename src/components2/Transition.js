import '../styles2/Transition.css'

export default function Transition({ useTransition, transitionStyle, transitionCategory }) {
  if (!useTransition) {
    return (
      <></>
    );
  }

  if (useTransition) {
    return (
      <div 
        style={ transitionStyle? { animationName: 'wipe-in-down' } : { animationName: 'wipe-out-down' } } 
        className='swipe'>
          <img src={require(`../resources/images/${transitionCategory}.svg`)} alt={transitionCategory} />
      </div>
    );
  }
}
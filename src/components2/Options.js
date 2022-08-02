import '../styles2/Options.css'

export default function Options({ validate, answer, options, useTransition }) {
  return (
    <div className='container_options'>
    {options.map((ele, ind) => {
      return <div
        style={useTransition? { pointerEvents: 'none' } : { pointerEvents: '' } }
        className={`options item${ind}`}
        key={ind}
        onClick={(e) => validate(answer, e)}
        >
        {ele}
      </div>
    })}
    </div>
  );
}
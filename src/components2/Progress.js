import '../styles2/Progress.css'

export default function Progress({ num, questionsLength, percentage }) {
  return (
    <div className='container_progress'>
      <div style={{ width: percentage + '%'}} className='progress'></div>
        Pregunta {num + 1} de {questionsLength}
    </div>
  );
}
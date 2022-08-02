import '../styles2/Questions.css'

export default function Questions({ quest }) {
  return (
    <div className='container_questions'>
      <p className='title_questions'>
        {quest}
      </p>
    </div>
  );
}
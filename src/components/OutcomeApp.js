import '../styles/OutcomeApp.css'
/* COMPONENTS */
import Questions from '../components2/Questions';
import Progress from '../components2/Progress';
import Options from '../components2/Options';

export default function OutcomeApp(props) {
  return (
    <div className='container Outcome_container'>
      <Progress
        percentage={props.percentage}
        num={props.currentQuestion} 
        questionsLength={props.questions[props.currentCategory].length} 
      />
      <div className='questions_options'>
        <Questions 
        quest={props.quest} 
        isStart={props.isStart}
        />
        <Options 
          validate={props.validate}
          answer={props.answer}
          options={props.options}
          isStart={props.isStart}
          useTransition={props.useTransition}
        />
      </div>
    </div>
  );
}
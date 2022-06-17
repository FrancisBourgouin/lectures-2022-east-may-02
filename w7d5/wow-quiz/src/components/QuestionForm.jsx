import useOwenWilson from "../hooks/useOwenWilson";
import useQuiz from "../hooks/useQuiz";

export default function QuestionForm(props) {
  const { question, answer, nextQuestion } = props;

  const { play, refresh } = useOwenWilson();
  const { handleChange, handleSubmit, reset, userAnswer, answerSubmitted } = useQuiz(
    answer,
    play
  );

  const handleNextQuestion = () => {
    reset();
    nextQuestion();
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <input type="text" value={userAnswer} onChange={handleChange} />
      {answerSubmitted && <p>{answer}</p>}
      <button type="submit">Submit Answer</button>
      <button type="button" onClick={handleNextQuestion}>
        Next Question
      </button>
    </form>
  );
}

// app.post("/login", (req,res) => {
//   const {email, password} = req.body

//  const {err, data} = handleUserAuthentication(email, password)

//  if(err){
//   ...
//  }

//  data

// })

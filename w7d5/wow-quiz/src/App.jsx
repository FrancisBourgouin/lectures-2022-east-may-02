import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import QuestionForm from "./components/QuestionForm";
import questionsSource from "./data/questions";
function App() {
  const [questions, setQuestions] = useState(questionsSource);
  const [step, setStep] = useState(0);

  const currentQuestion = questions[step];

  const nextQuestion = () => {
    // 123456789
    // 101010
    const nextStep = (step + 1) % questions.length;
    setStep(nextStep);
  };
  return (
    <div className="App">
      <Header />
      {/* <QuestionForm question={questions[0].question} answer={questions[0].answer} /> */}
      <QuestionForm {...currentQuestion} nextQuestion={nextQuestion} />
      <LoginForm />
    </div>
  );
}

export default App;

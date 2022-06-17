import { useState } from "react";

export default function useQuiz(answer, extraActions) {
  const [userAnswer, setUserAnswer] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    setUserAnswer(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (answer === userAnswer) {
      console.log("wow");
      extraActions();
    }

    setAnswerSubmitted(true);
  };

  const reset = () => {
    setAnswerSubmitted(false);
    setUserAnswer("");
  };

  return { handleChange, handleSubmit, reset, userAnswer, answerSubmitted };
}

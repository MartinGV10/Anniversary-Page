import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: ""
  });
  const navigate = useNavigate();

  const questions = [
    {
      id: "q1",
      question: "Who keeps stealing the bed sheets?",
      options: ["Jessie", "Henny", "Biscuit", 'Baby'],
      correct: "Jessie"
    },
    {
      id: "q2",
      question: "What did our first conversation have to do with?",
      options: ["Your deodrant collection", "Pets", "Doing dishes", "Making desserts"],
      correct: "Doing dishes"
    },
    {
      id: "q3",
      question: "When did we tell each other that we liked each other",
      options: ["November 13", "December 7", "January 24", "October 6"],
      correct: "November 13"
    },
    {
      id: "q4",
      question: "What did the first bouquet of flowers I got you look like?",
      options: ["Red/Yellow/Blue", "White/Purple", "Purple/Pink", "White/Pink/Green"],
      correct: "White/Pink/Green"
    }
  ];

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const changePage = (e) => {
    e.preventDefault();

    const allCorrect = questions.every(q => answers[q.id] === q.correct);

    if (allCorrect) {
      navigate("/home");
    } else {
      alert("Nuh uh, henny is mad rn");
    }
  };

  return (
    <div className="opening-cont">
      <form onSubmit={changePage} className="home">
        <h1 className="welcome">Before you have fun...</h1>
        <div className="f-bot">
          {questions.map(q => (
            <div key={q.id} className="question-group">
              <label className="question-label">{q.question}</label>
              <div className="radio-group">
                {q.options.map(option => (
                  <div key={option} className="radio-option">
                    <input
                      type="radio"
                      id={`${q.id}-${option}`}
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleAnswerChange(q.id, option)}
                    />
                    <label htmlFor={`${q.id}-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="sub" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Welcome;

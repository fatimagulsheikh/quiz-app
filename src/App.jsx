import { useState } from "react";
import questions from "./questions";
import "./App.css";

function App() {
  // Current question
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // All user answers
  const [userAnswers, setUserAnswers] = useState([]);

  // Show result
  const [showResult, setShowResult] = useState(false);

  // Current question
  const question = questions[currentQuestion];

  // Select answer
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // Next / Submit
  const handleNext = () => {
    // Agar answer select nahi kiya
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    // Save current answer
    const updatedAnswers = [...userAnswers];

    updatedAnswers[currentQuestion] = selectedAnswer;

    setUserAnswers(updatedAnswers);

    // Agar last question nahi hai
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // Last question
      setShowResult(true);
    }
  };

  // Restart test
  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setShowResult(false);
  };

  // Calculate score
  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      if (userAnswers[index] === question.answer) {
        return score + 1;
      }

      return score;
    }, 0);
  };

  // Result screen
  if (showResult) {
    const score = calculateScore();

    const wrongAnswers = questions.length - score;

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="app">
        <div className="result-container">

          <div className="result-header">
            <h1>🎉 Test Completed!</h1>

            <p>Here is your final result</p>
          </div>

          {/* Result Summary */}
          <div className="result-summary">

            <div className="result-box">
              <h3>Total</h3>
              <p>{questions.length}</p>
            </div>

            <div className="result-box correct-box">
              <h3>Correct</h3>
              <p>{score}</p>
            </div>

            <div className="result-box wrong-box">
              <h3>Wrong</h3>
              <p>{wrongAnswers}</p>
            </div>

            <div className="result-box score-box">
              <h3>Score</h3>
              <p>{percentage}%</p>
            </div>

          </div>

          {/* Question Review */}
          <div className="review">

            <h2>📋 Question Review</h2>

            {questions.map((question, index) => {

              const userAnswer = userAnswers[index];

              const isCorrect =
                userAnswer === question.answer;

              return (
                <div
                  className={`review-card ${
                    isCorrect ? "correct" : "wrong"
                  }`}
                  key={question.id}
                >

                  <h3>
                    {index + 1}. {question.question}
                  </h3>

                  <p>
                    <strong>Your Answer:</strong>{" "}
                    <span
                      className={
                        isCorrect
                          ? "correct-text"
                          : "wrong-text"
                      }
                    >
                      {userAnswer || "Not answered"}
                    </span>
                  </p>

                  <p>
                    <strong>Correct Answer:</strong>{" "}
                    <span className="correct-text">
                      {question.answer}
                    </span>
                  </p>

                  <div className="answer-status">
                    {isCorrect ? (
                      <span>✅ Correct</span>
                    ) : (
                      <span>❌ Wrong</span>
                    )}
                  </div>

                </div>
              );
            })}

          </div>

          {/* Restart */}
          <button
            className="restart-btn"
            onClick={restartTest}
          >
            🔄 Restart Test
          </button>

        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="app">

      <div className="quiz-container">

        {/* Header */}
        <div className="quiz-header">

          <h1>📝 MCQ Quiz</h1>

          <p>
            Question {currentQuestion + 1} of{" "}
            {questions.length}
          </p>

        </div>

        {/* Progress */}
        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          ></div>

        </div>

        {/* Question */}
        <div className="question-section">

          <h2>
            {question.question}
          </h2>

        </div>

        {/* Options */}
        <div className="options">

          {question.options.map(
            (option, index) => (

              <button
                key={index}
                className={`option ${
                  selectedAnswer === option
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  handleAnswer(option)
                }
              >

                <span className="option-letter">
                  {String.fromCharCode(
                    65 + index
                  )}
                </span>

                <span>{option}</span>

              </button>

            )
          )}

        </div>

        {/* Next Button */}
        <button
          className="next-btn"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Submit Test"
            : "Next Question →"}
        </button>

      </div>

    </div>
  );
}

export default App;
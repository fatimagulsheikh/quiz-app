import { useState } from "react";
import questions from "./questions";
import "./App.css";

const QUESTIONS_PER_TEST = 30;

function App() {
  // Current test: 0, 1, 2
  const [currentTest, setCurrentTest] = useState(0);

  // Current question inside current test
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Selected answer
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Answers of current test
  const [userAnswers, setUserAnswers] = useState([]);

  // Show result
  const [showResult, setShowResult] = useState(false);

  // Get current 30 questions
  const startIndex = currentTest * QUESTIONS_PER_TEST;

  const currentQuestions = questions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_TEST
  );

  // Current question
  const question = currentQuestions[currentQuestion];

  // Select answer
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // Next / Submit
  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    // Save answer
    const updatedAnswers = [...userAnswers];

    updatedAnswers[currentQuestion] = selectedAnswer;

    setUserAnswers(updatedAnswers);

    // More questions in this test
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // 30 questions completed
      setShowResult(true);
    }
  };

  // Calculate current test score
  const calculateScore = () => {
    return currentQuestions.reduce((score, question, index) => {
      if (userAnswers[index] === question.answer) {
        return score + 1;
      }

      return score;
    }, 0);
  };

  // Start next 30 questions
  const nextTest = () => {
    setCurrentTest(currentTest + 1);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setShowResult(false);
  };

  // Restart everything
  const restartQuiz = () => {
    setCurrentTest(0);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setShowResult(false);
  };

  // Result Screen
  if (showResult) {
    const score = calculateScore();

    const wrongAnswers =
      currentQuestions.length - score;

    const percentage = Math.round(
      (score / currentQuestions.length) * 100
    );

    // Is this the last test?
    const isLastTest =
      startIndex + currentQuestions.length >=
      questions.length;

    return (
      <div className="app">
        <div className="result-container">

          {/* Result Header */}
          <div className="result-header">
            <h1>🎉 Test {currentTest + 1} Completed!</h1>

            <p>
              You completed questions{" "}
              {startIndex + 1} -{" "}
              {startIndex + currentQuestions.length}
            </p>
          </div>

          {/* Result Summary */}
          <div className="result-summary">

            <div className="result-box">
              <h3>Total</h3>
              <p>{currentQuestions.length}</p>
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

            {currentQuestions.map(
              (question, index) => {

                const userAnswer =
                  userAnswers[index];

                const isCorrect =
                  userAnswer === question.answer;

                return (
                  <div
                    className={`review-card ${
                      isCorrect
                        ? "correct"
                        : "wrong"
                    }`}
                    key={question.id || index}
                  >

                    <h3>
                      {startIndex + index + 1}.{" "}
                      {question.question}
                    </h3>

                    {/* Question Image */}
                    {question.image && (
                      <img
                        src={question.image}
                        alt="Question"
                        className="review-image"
                      />
                    )}

                    <p>
                      <strong>
                        Your Answer:
                      </strong>{" "}

                      <span
                        className={
                          isCorrect
                            ? "correct-text"
                            : "wrong-text"
                        }
                      >
                        {userAnswer ||
                          "Not answered"}
                      </span>
                    </p>

                    <p>
                      <strong>
                        Correct Answer:
                      </strong>{" "}

                      <span className="correct-text">
                        {question.answer}
                      </span>
                    </p>

                    <div className="answer-status">
                      {isCorrect ? (
                        <span>
                          ✅ Correct
                        </span>
                      ) : (
                        <span>
                          ❌ Wrong
                        </span>
                      )}
                    </div>

                  </div>
                );
              }
            )}

          </div>

          {/* Buttons */}

          {!isLastTest ? (
            <button
              className="next-btn"
              onClick={nextTest}
            >
              Next 30 Questions →
            </button>
          ) : (
            <div className="final-message">
              <h2>🏆 All Tests Completed!</h2>

              <p>
                You have completed all{" "}
                {questions.length} questions.
              </p>
            </div>
          )}

          <button
            className="restart-btn"
            onClick={restartQuiz}
          >
            🔄 Restart Quiz
          </button>

        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="app">

      <div className="quiz-container">

        {/* Header */}
        <div className="quiz-header">

          <h1>
            📝 MCQ Quiz
          </h1>

          <h2>
            Test {currentTest + 1}
          </h2>

          <p>
            Question {currentQuestion + 1} of{" "}
            {currentQuestions.length}
          </p>

          <p>
            Overall:{" "}
            {startIndex + currentQuestion + 1} /{" "}
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
                  currentQuestions.length) *
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

          {/* Question Image */}
          {question.image && (
            <img
              src={question.image}
              alt="Question"
              className="question-image"
            />
          )}

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

                <span>
                  {option}
                </span>

              </button>

            )
          )}

        </div>

        {/* Next Button */}
        <button
          className="next-btn"
          onClick={handleNext}
        >
          {currentQuestion ===
          currentQuestions.length - 1
            ? "Submit Test"
            : "Next Question →"}
        </button>

      </div>

    </div>
  );
}

export default App;
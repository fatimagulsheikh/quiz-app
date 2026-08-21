import { useState } from "react";
import questions from "./questions";
import "./App.css";

const QUESTIONS_PER_TEST = 30;

// 🔐 Quiz Password
const QUIZ_PASSWORD = "033220";

function App() {
  // =========================
  // PASSWORD
  // =========================

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // =========================
  // QUIZ STATES
  // =========================

  const [currentTest, setCurrentTest] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // =========================
  // PASSWORD LOGIN
  // =========================

  const handleLogin = () => {
    if (password === QUIZ_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError(
        "Incorrect password. Please try again."
      );
    }
  };

  // =========================
  // PASSWORD SCREEN
  // =========================

  if (!isAuthenticated) {
    return (
      <div className="app">
        <div className="quiz-container password-container">

          <div className="quiz-header">
            <h1>🔐 Quiz Access</h1>

            <h2>Enter Password</h2>

            <p>
              Please enter the password to start the quiz.
            </p>
          </div>

          <input
            type="password"
            className="password-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          {passwordError && (
            <p className="password-error">
              ❌ {passwordError}
            </p>
          )}

          <button
            className="next-btn"
            onClick={handleLogin}
          >
            🔓 Unlock Quiz
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // CURRENT QUESTIONS
  // =========================

  const startIndex =
    currentTest * QUESTIONS_PER_TEST;

  const currentQuestions = questions.slice(
    startIndex,
    startIndex + QUESTIONS_PER_TEST
  );

  const question =
    currentQuestions[currentQuestion];

  // =========================
  // SELECT ANSWER
  // =========================

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // =========================
  // NEXT / SUBMIT
  // =========================

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    const updatedAnswers = [...userAnswers];

    updatedAnswers[currentQuestion] =
      selectedAnswer;

    setUserAnswers(updatedAnswers);

    if (
      currentQuestion <
      currentQuestions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  // =========================
  // SCORE
  // =========================

  const calculateScore = () => {
    return currentQuestions.reduce(
      (score, question, index) => {
        if (
          userAnswers[index] ===
          question.answer
        ) {
          return score + 1;
        }

        return score;
      },
      0
    );
  };

  // =========================
  // START / RETAKE TEST
  // =========================

  const selectTest = (testNumber) => {
    setCurrentTest(testNumber);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setShowResult(false);
  };

  // =========================
  // RESTART QUIZ
  // =========================

  const restartQuiz = () => {
    setCurrentTest(0);
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setUserAnswers([]);
    setShowResult(false);
  };

  // =========================
  // RESULT SCREEN
  // =========================

  if (showResult) {
    const score = calculateScore();

    const wrongAnswers =
      currentQuestions.length - score;

    const percentage = Math.round(
      (score / currentQuestions.length) * 100
    );

    return (
      <div className="app">

        <div className="result-container">

          {/* RESULT HEADER */}

          <div className="result-header">

            <h1>
              🎉 Test {currentTest + 1} Completed!
            </h1>

            <p>
              Questions{" "}
              {startIndex + 1} -{" "}
              {startIndex +
                currentQuestions.length}
            </p>

          </div>

          {/* RESULT SUMMARY */}

          <div className="result-summary">

            <div className="result-box">
              <h3>Total</h3>
              <p>
                {currentQuestions.length}
              </p>
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

          {/* TEST SELECTION */}

          <div className="test-selection">

            <h2>📚 Choose Your Test</h2>

            <p className="selection-text">
              You can retake any test anytime.
            </p>

            <div className="test-buttons">

              {/* TEST 1 */}

              <button
                className="test-select-btn test-one"
                onClick={() => selectTest(0)}
              >
                <span>🟢</span>

                <div>
                  <strong>
                    Questions 1–30
                  </strong>

                  <small>
                    Retake Test 1
                  </small>
                </div>

              </button>

              {/* TEST 2 */}

              <button
                className="test-select-btn test-two"
                onClick={() => selectTest(1)}
              >
                <span>🔵</span>

                <div>
                  <strong>
                    Questions 31–60
                  </strong>

                  <small>
                    Start Test 2
                  </small>
                </div>

              </button>

              {/* TEST 3 */}

              <button
                className="test-select-btn test-three"
                onClick={() => selectTest(2)}
              >
                <span>🟣</span>

                <div>
                  <strong>
                    Questions 61–90
                  </strong>

                  <small>
                    Start Test 3
                  </small>
                </div>

              </button>

            </div>

          </div>

          {/* QUESTION REVIEW */}

          <div className="review">

            <h2>
              📋 Question Review
            </h2>

            {currentQuestions.map(
              (question, index) => {

                const userAnswer =
                  userAnswers[index];

                const isCorrect =
                  userAnswer ===
                  question.answer;

                return (
                  <div
                    className={`review-card ${
                      isCorrect
                        ? "correct"
                        : "wrong"
                    }`}
                    key={
                      question.id || index
                    }
                  >

                    <h3>
                      {startIndex +
                        index +
                        1}
                      .{" "}
                      {question.question}
                    </h3>

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

          {/* RESTART */}

          <button
            className="restart-btn"
            onClick={restartQuiz}
          >
            🔄 Back to Questions 1–30
          </button>

        </div>

      </div>
    );
  }

  // =========================
  // QUIZ SCREEN
  // =========================

  return (
    <div className="app">

      <div className="quiz-container">

        {/* HEADER */}

        <div className="quiz-header">

          <h1>
            📝 MCQ Quiz
          </h1>

          <h2>
            Test {currentTest + 1}
          </h2>

          <p>
            Question{" "}
            {currentQuestion + 1} of{" "}
            {currentQuestions.length}
          </p>

          <p>
            Questions{" "}
            {startIndex + 1} –{" "}
            {startIndex +
              currentQuestions.length}
          </p>

        </div>

        {/* PROGRESS */}

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

        {/* QUESTION */}

        <div className="question-section">

          <h2>
            {question.question}
          </h2>

          {question.image && (
            <img
              src={question.image}
              alt="Question"
              className="question-image"
            />
          )}

        </div>

        {/* OPTIONS */}

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

        {/* NEXT */}

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
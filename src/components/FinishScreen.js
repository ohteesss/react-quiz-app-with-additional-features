import { useQuiz } from "../context/QuizContext";

function Finished() {
  const { points, totalPoints, highScore, dispatch } = useQuiz();
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      {" "}
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints}(
        {Math.ceil(percentage)})%
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restarted" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;

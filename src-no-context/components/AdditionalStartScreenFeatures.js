import { useState } from "react";
function AdditionalStartScreen({ dispatch, questions }) {
  let maxQuestion;
  const [difficulty, setDifficulty] = useState(0);
  const [numberQuest, setNumberQuest] = useState(1);
  const [secsPerQuest, setSecsPerQuest] = useState(5);
  function settingMaxQuestion() {
    switch (difficulty) {
      case 0:
        return (maxQuestion = questions.length);
      case 1:
        return (maxQuestion = questions.filter((q) => q.points === 10).length);
      case 2:
        return (maxQuestion = questions.filter((q) => q.points === 20).length);
      case 3:
        return (maxQuestion = questions.filter((q) => q.points === 30).length);
      default:
        throw new Error("Something went wrong");
    }
  }
  settingMaxQuestion();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "settings",
      payload: { difficulty, numberQuest, secsPerQuest },
    });
  }
  return (
    <div className="start">
      <h2>Initial Settings</h2>
      <form className="form-settings" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Dificulty</label>
          <select
            onChange={(e) => setDifficulty(+e.target.value)}
            value={difficulty}
          >
            <option value={0}>None</option>
            <option value={1}>Easy</option>
            <option value={2}>Medium</option>
            <option value={3}>Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Number of Questions</label>
          <select
            value={numberQuest}
            onChange={(e) => setNumberQuest(+e.target.value)}
          >
            {Array.from({ length: maxQuestion }, (_, i) => i + 1).map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Number of Seconds per Question</label>
          <select
            onChange={(e) => setSecsPerQuest(+e.target.value)}
            value={secsPerQuest}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default AdditionalStartScreen;

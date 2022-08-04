import React, { useState } from "react";

function Task({ text, category }) {
  const [isClicked, removeTask] = useState(false);

  function handleTaskRemoval() {
    removeTask((isClicked) => (isClicked = !isClicked));
  }

  return isClicked ? null : (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleTaskRemoval}>
        x
      </button>
    </div>
  );
}

export default Task;

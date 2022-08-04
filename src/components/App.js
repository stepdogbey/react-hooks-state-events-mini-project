import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [displayCategory, setCategory] = useState(CATEGORIES[0]);
  const [updateList, setList] = useState(TASKS);

  useEffect(() => {
    // console.log(updateList, displayCategory);
    const toDisplay = TASKS.filter((task) => task.category === displayCategory);
    displayCategory === "All" ? setList(TASKS) : setList(toDisplay);
  }, [displayCategory]);

  function handleSelect(newEvent) {
    setCategory(
      (initialCategory) =>
        (initialCategory = CATEGORIES.find(
          (category) => category === newEvent.target.name
        ))
    );
  }

  function onTaskFormSubmit(newItem) {
    setList([...updateList, newItem]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSelect={handleSelect} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={updateList} />
    </div>
  );
}

export default App;

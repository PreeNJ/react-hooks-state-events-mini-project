import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // when CategoryFilter is clicked
  function handleCategoryChange(cat) {
    setSelectedCategory(cat);
  }

  // when Task’s delete button is clicked
  function handleDeleteTask(text) {
    setTasks((prev) => prev.filter((t) => t.text !== text));
  }

  // when NewTaskForm is submitted
  function handleAddTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  // decide which tasks to show
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((c) => c !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

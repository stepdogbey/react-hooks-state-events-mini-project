import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const toList = categories.filter((category) => category !== "All");

  const [formData, setFormData] = useState({
    text: "John",
    category: "Code",
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const newItem = {
    text: formData.text,
    category: formData.category,
  };

  function handleForm(event) {
    event.preventDefault();
    console.log(newItem);
    onTaskFormSubmit(newItem);
  }

  return (
    <form className="new-task-form" onSubmit={handleForm}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleInputChange}>
          {toList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

import React from "react";
import { useState } from "react";

export const InputForm = ({ taskList, setTaskList, selectedDate }) => {
  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // console.log("add task");

    /* タスクを追加する。 */
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
        date: selectedDate.toLocaleDateString('sv-SE'), // YYYY-MM-DD
      },
    ]);
    // console.log(taskList);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div className="inputForm">
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addTask}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import Title from "./components/Title";
import { TodoList } from "./components/TodoList";
import { CalendarView } from "./components/CalendarView";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 選択された日付のタスクのみをフィルタリング
  const filteredTaskList = taskList.filter(task => {
    if (!task.date) return false; // 日付がないタスクは表示しない（または別の扱いにする）
    return task.date === selectedDate.toLocaleDateString('sv-SE');
  });

  return (
    <div className="body">
      <Title />
      <div className="main-container">
        <div className="calendar-section">
            <CalendarView 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate} 
                taskList={taskList}
            />
        </div>
        <div className="task-section">
            <h3>{selectedDate.toLocaleDateString()} のタスク</h3>
            <InputForm 
                taskList={taskList} 
                setTaskList={setTaskList} 
                selectedDate={selectedDate}
            />
            <TodoList taskList={filteredTaskList} setTaskList={setTaskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
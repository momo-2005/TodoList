import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarView = ({ selectedDate, setSelectedDate, taskList }) => {
  
  // タスクがある日付を判定する関数
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // 日付をYYYY-MM-DD形式に変換して比較
      const dateString = date.toLocaleDateString('sv-SE'); // YYYY-MM-DD format
      const hasTask = taskList.some(task => task.date === dateString);
      
      if (hasTask) {
        return <div className="dot"></div>;
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <Calendar 
        onChange={setSelectedDate} 
        value={selectedDate}
        tileContent={tileContent}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        completed: false
      };
      dispatch(addTask(newTask));
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

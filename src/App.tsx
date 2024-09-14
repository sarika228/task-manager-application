import React, { useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTasks } from './redux/taskSlice';
import './styles.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/tasks.json');
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div>
      <h1 className='heading'>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

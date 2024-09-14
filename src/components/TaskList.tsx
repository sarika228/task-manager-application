import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskCompletion, deleteTask, setFilter } from '../redux/taskSlice';
import { RootState } from '../redux/store';
import { Task } from '../redux/taskSlice';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className='taskList'>
      <h2 className='tl'>Task List</h2>
      <ul className='listItems'>
        {filteredTasks.map((task: Task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(task.id))}
            />
            {task.title}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>

      <div className='buttons'>
      <button onClick={() => dispatch(setFilter('all'))}>Show All</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Show Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Show Pending</button>
      </div>
    </div>
  );
};

export default TaskList;

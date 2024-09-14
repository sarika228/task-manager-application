import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'pending';
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    toggleTaskCompletion(state, action: PayloadAction<number>) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<'all' | 'completed' | 'pending'>) {
      state.filter = action.payload;
    }
  }
});

export const { setTasks, addTask, toggleTaskCompletion, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;

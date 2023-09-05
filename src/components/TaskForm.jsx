import Task from './Task';
import './TaskForm.css';

const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Task tagName="HTML" />
            <Task tagName="CSS" />
            <Task tagName="JavaScript" />
            <Task tagName="React" />
          </div>
          <div>
            <select className="task_status">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="task_submit"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

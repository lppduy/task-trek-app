import { useState } from 'react';
import Task from './Tag';
import './TaskForm.css';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const checkTag = tag => {
    return taskData.tags.some(item => item === tag);
  };

  const selectTag = tag => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag);
      setTaskData(prev => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData(prev => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setTaskData(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(taskData);
    setTasks(prev => {
      return [...prev, taskData];
    });

    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
  };
  // when we select a tag then hit enter that won't work
  // -> we have to click the button
  // || select the input again and hit the enter
  // BUG how can we fix that?

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Task
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Task
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag('CSS')}
            />
            <Task
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag('JavaScript')}
            />
            <Task
              tagName="React"
              selectTag={selectTag}
              selected={checkTag('React')}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
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

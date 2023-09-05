import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img
          className="task_column_icon"
          src={icon}
          alt=""
        />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              title={task.task}
              tags={task.tags}
              key={index}
              handleDelete={handleDelete}
              index={index}
            />
          ),
      )}
    </section>
  );
};

export default TaskColumn;

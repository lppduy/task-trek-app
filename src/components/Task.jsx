import './Task.css';

const Task = props => {
  return <button className="tag">{props.tagName}</button>;
};

export default Task;

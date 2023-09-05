import './Task.css';

const Task = ({ tagName, selectTag }) => {
  return (
    <button
      type="button" // otherwise type="submit" as default
      className="tag"
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Task;

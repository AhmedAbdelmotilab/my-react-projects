import { useTasksStore, type TaskObj } from "../store/TasksStore";

interface TaskProps {
  task: TaskObj;
}
function Task({ task }: TaskProps) {
  const setDeleteTask = useTasksStore((state) => state.setDeleteTask);
  const setIsUpdate = useTasksStore((state) => state.setIsUpdate);
  const setIsDone = useTasksStore((state) => state.setIsDone);
  const title = useTasksStore((state) => state.title);
  const setTitle = useTasksStore((state) => state.setTitle);
  function handelSelectTask() {
    setTitle(task.title);
  }
  function handelUpdateTask() {
    if (!title) return;
    setIsUpdate(task.id, title);
    setTitle("");
  }
  return (
    <li className="task-item">
      <input type="checkbox" onChange={() => setIsDone(task.id)}></input>
      <label
        className="task-label"
        style={task.isDone ? { textDecoration: "line-through" } : {}}
      >
        <span className="task-text" onClick={handelSelectTask}>
          {task.title}
        </span>
      </label>
      <div className="task-actions">
        <button className="btn btn-update" onClick={handelUpdateTask}>
          Update
        </button>
        <button
          className="btn btn-delete"
          onClick={() => setDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
export default Task;

import { useTasksStore, type TaskData } from "../store/TasksStore";
interface TaskProp {
  t: TaskData;
}
function Task({ t }: TaskProp) {
  const setDeleteTask = useTasksStore((state) => state.setDeleteTask);
  const setDoneTask = useTasksStore((state) => state.setDoneTask);
  return (
    <li className="task-item">
      <label className="task-label">
        <input type="checkbox"></input>
        <span
          className="task-text"
          style={{ textDecoration: `${t.isDone ? "line-through" : ""}` }}
        >
          {t.title}
        </span>
      </label>
      <div className="task-actions">
        <button
          className="btn btn-update"
          onClick={() => setDoneTask(t.id)}
          style={{ textDecoration: `${t.isDone ? "line-through" : ""}` }}
        >
          Done
        </button>
        <button className="btn btn-delete" onClick={() => setDeleteTask(t.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
export default Task;

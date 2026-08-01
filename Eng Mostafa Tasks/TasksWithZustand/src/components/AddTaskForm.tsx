import { useTasksStore } from "../store/TasksStore";

function AddTaskForm() {
  const title = useTasksStore((state) => state.title);
  const setTitle = useTasksStore((state) => state.setTitle);
  const setTasks = useTasksStore((state) => state.setTasks);
  function handelAddTask() {
    if (!title) return;
    setTasks(title);
    setTitle("");
  }
  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Enter task name..."
        className="task-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button className="btn btn-add" onClick={handelAddTask}>
        Add Task
      </button>
    </div>
  );
}
export default AddTaskForm;

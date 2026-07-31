import { useState } from "react";
import { useTasksStore } from "../store/TasksStore";

function AddTaskForm() {
  const [title, setTitle] = useState("");
  const setTasks = useTasksStore((state) => state.setTasks);
  function handelSetTasks() {
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
      <button className="btn btn-add" onClick={handelSetTasks}>
        Add Task
      </button>
    </div>
  );
}
export default AddTaskForm;

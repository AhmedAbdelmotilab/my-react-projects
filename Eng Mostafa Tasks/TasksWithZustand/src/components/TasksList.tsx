import { useTasksStore } from "../store/TasksStore";
import Task from "./Task";

function TasksList() {
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} t={task} />
      ))}
    </ul>
  );
}
export default TasksList;

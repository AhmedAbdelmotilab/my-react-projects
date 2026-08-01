import { useTasksStore } from "../store/TasksStore";
import Task from "./Task";

function TasksList() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
export default TasksList;

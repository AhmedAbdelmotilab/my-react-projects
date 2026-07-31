import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="task-card">
      <h2>Task Manager</h2>

      <AddTaskForm />
      <TasksList />
    </div>
  );
}
export default App;

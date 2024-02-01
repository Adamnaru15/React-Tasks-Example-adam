import { TaskCard } from "../component/taskCard";
import { useContext } from "react";
import { TaskContext } from "../contextfolder/context";

function TaskList() {
  const { Task } = useContext(TaskContext);
  if (Task.length === 0) {
    return <h1 className="text-white text-4xl font-bold">No hay tareas disponibles</h1>;
  }
  return (
    
    <div className="grid grid-cols-4 gap-2">
      {Task.map((e) => (
        <TaskCard key={e.id} e={e} />
      ))}
    </div>
  );
}
export default TaskList;

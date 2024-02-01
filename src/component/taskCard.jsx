import { useContext } from "react";
import { TaskContext } from "../contextfolder/context";

export function TaskCard({ e }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize" >{e.name}</h1>
      <p className="text-gray-500 text-sm" >{e.description}</p>
      <button  className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-300" onClick={() => deleteTask(e.id)}>Eliminar tarea</button>
    </div>
  );
}

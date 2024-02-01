import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../contextfolder/context";

function TaskForm() {
  const { TaskCreate } = useContext(TaskContext);

  const [name, setName] = useState("");
  const [descripcion, setdescripcion] = useState("");

  const tucu = (e) => {
    e.preventDefault();
    TaskCreate(
      name == "" ? "tarea sin nombre" : name,
      descripcion == "" ? "Description de tarea sustituta" : descripcion
    );
    setName("");
    setdescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={tucu} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className=" bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => setdescripcion(e.target.value)}
          className=" bg-slate-300 p-3 w-full mb-2"
          value={descripcion}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;

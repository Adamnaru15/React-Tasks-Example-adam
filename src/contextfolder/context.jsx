import { createContext } from "react";
import { useEffect, useState } from "react";
import { task as date } from "../date/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    setTask(date);
  }, []);

  function TaskCreate(name, descripcion) {
    setTask([
      ...Task,
      {
        name,
        description: descripcion,
        id: Task.length,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTask(Task.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        Task,
        TaskCreate,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

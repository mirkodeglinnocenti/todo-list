import { useState } from "react";
import Popup from "./components/Popup";
import ITask from "./interfaces/ITask";
import "./assets/css/App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Add Task
  const addTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
  };

  // SetDone Task
  function setDone(task: ITask) {

    const updatedTasks = tasks.map((el) => {
      if (el === task) {
        return { ...el, done: !el.done };
      }
      return el;
    });
  
    setTasks(updatedTasks);
  }

  // Delete Task
  const deleteTask = (index: number) => {

    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    setTasks(newTasks)
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="todo-box shadow">
            <div className="todo-card">
              <h1 className="title-todo-box">Todo List</h1>
              <div className="todo-list">
                <ul>
                  {tasks.map((task, index) => {
                    return (
                      <li className="list-item" key={index}>
                        <span onClick={()=>deleteTask(index)}>
                        <img className="trash-icon" src="./assets/img/Bin.svg" alt="trash icon" />
                        </span>
                        <span onClick={()=>setDone(task)}>
                        <img className="checkbox-icon" src={task.done ? "./assets/img/Checkbox_On.svg" : "./assets/img/Checkbox_Off.svg"} alt="trash icon" />
                        </span>
                        <span className={task.done ? "label-strikethrough" : "label"}>{task.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="new-item-box">
            <button
              onClick={() => setIsOpen(true)}
              className="button-new-item label-medium shadow"
            >
              <div className="flex-button">
                <div className="icon-button">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33 20L7 20"
                      stroke="var(--text-color)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 33L20 7"
                      stroke="var(--text-color)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="label-medium">Nuova voce</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        {isOpen ? <Popup setIsOpen={setIsOpen} addTask={addTask} /> : ""}
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import Popup from "./components/Popup";
import ITask from "./interfaces/ITask";
import "./assets/css/App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([
    {
      name: "LOREM ISPSUM",
      done: false,
    },
    {
      name: "LOREM ISPSUM ciao",
      done: false,
    },
  ]);

  const addTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
  };

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
                      <li className="label list-item" key={index}>
                        <img className="trash-icon" src="./assets/img/Bin.svg" alt="trash icon" />
                        <img className="checkbox-icon" src="./assets/img/Checkbox_Off.svg" alt="trash icon" />
                        {task.name}
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

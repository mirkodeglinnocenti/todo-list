import { useEffect, useState } from "react";
import Popup from "./components/Popup";
import ITask from "./interfaces/ITask";
import "./assets/css/App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [undoneTasks, setUndoneTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const undoneArray: ITask[] = [];
    const doneArray: ITask[] = [];

    if (savedTasks) {
      const tasksArray = JSON.parse(savedTasks);
      tasksArray.forEach((el: ITask) => {
        if (el.done === false) {
          undoneArray.push(el);
        } else {
          doneArray.push(el);
        }
      });

      setUndoneTasks(undoneArray);
      setDoneTasks(doneArray);
    }
  }, []);

  // Add Task
  const addTask = (newTask: ITask) => {
    const newTasks = [...undoneTasks, newTask];
    setUndoneTasks(newTasks);

    let tasks = [...newTasks, ...doneTasks];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // SetDone Task
  function setDone(task: ITask, index: number) {
    let newUndoneTasks: any;
    let newDoneTasks: any;
    let newTasks;

    if (task.done === false) {
      newTasks = [...undoneTasks];
      newTasks.splice(index, 1);
      setUndoneTasks(newTasks);

      task.done = !task.done;
      newDoneTasks = [...doneTasks, task];
      setDoneTasks(newDoneTasks);
    } else {
      newTasks = [...doneTasks];
      newTasks.splice(index, 1);
      setDoneTasks(newTasks);
      task.done = !task.done;
      newUndoneTasks = [...undoneTasks, task];
      setUndoneTasks(newUndoneTasks);
    }

    let tasks = [...undoneTasks, ...doneTasks];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Delete Task
  const deleteTask = (done: Boolean, index: number) => {
    let newTasks;
    let tasks;

    if (done === false) {
      newTasks = [...undoneTasks];
      newTasks.splice(index, 1);
      setUndoneTasks(newTasks);
      tasks = [...newTasks, ...doneTasks];
    } else {
      newTasks = [...doneTasks];
      newTasks.splice(index, 1);
      setDoneTasks(newTasks);
      tasks = [...undoneTasks, ...newTasks];
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
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
                  {undoneTasks.map((task, index) => {
                    return (
                      <li className="list-item" key={index}>
                        <span className="trash-icon" onClick={() => deleteTask(task.done, index)}>
                          <img
                            src="./assets/img/Bin.svg"
                            alt="trash icon"
                          />
                        </span>
                        <span className="checkbox-icon" onClick={() => setDone(task, index)}>
                          <img
                            src={
                              task.done
                                ? "./assets/img/Checkbox_On.svg"
                                : "./assets/img/Checkbox_Off.svg"
                            }
                            alt="trash icon"
                          />
                        </span>
                        <span
                          className={
                            task.done ? "label-strikethrough" : "label"
                          }
                        >
                          {task.name}
                        </span>
                      </li>
                    );
                  })}
                  {doneTasks.map((task, index) => {
                    return (
                      <li className="list-item" key={index}>
                        <span className="trash-icon" onClick={() => deleteTask(task.done, index)}>
                          <img
                            src="./assets/img/Bin.svg"
                            alt="trash icon"
                          />
                        </span>
                        <span className="checkbox-icon" onClick={() => setDone(task, index)}>
                          <img
                            src={
                              task.done
                                ? "./assets/img/Checkbox_On.svg"
                                : "./assets/img/Checkbox_Off.svg"
                            }
                            alt="trash icon"
                          />
                        </span>
                        <span
                          className={
                            task.done ? "label-strikethrough" : "label"
                          }
                        >
                          {task.name}
                        </span>
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

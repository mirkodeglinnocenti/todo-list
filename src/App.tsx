import { useState } from 'react'
import Popup from "./components/Popup";
import "./assets/css/app.css";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="todo-box shadow">
            <h1 className="title-todo-box">Todo List</h1>
            <div className="todo-list">
              <ul>
                <li className="label">Lorem ipsum dolor sit.</li>
                <li className="label">Lorem ipsum dolor sit.</li>
                <li className="label">Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="new-item-box">
            <button onClick={()=> setIsOpen(true)} className="button-new-item label-medium shadow">
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
        {
          isOpen ?
        <Popup/>
        :
        ""
        }
      </main>
    </>
  );
}

export default App;

import "./assets/css/app.css";

function App() {
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
            <button className="button-new-item label-medium shadow">
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
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20 33L20 7"
                      stroke="var(--text-color)"
                      stroke-width="3"
                      stroke-linecap="round"
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
      </main>
    </>
  );
}

export default App;

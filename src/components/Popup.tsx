import { useState } from "react";
import "./Popup.css";
import ITask from "../interfaces/ITask";

const Popup = ({
  setIsOpen,
  addTask,
}: {
  setIsOpen: (isOpen: boolean) => void;
  addTask: (newTask: ITask) => void;
}) => {
  const [name, setName] = useState<string>("");
  const formSubmit = () => {
    const task: ITask = {
      name: name,
      done: false,
    };

    addTask(task);
    setIsOpen(false);
    setName("");
  };

  return (
    <section className="popup-section">
      <form className="popup" onSubmit={formSubmit}>
        <textarea
          className="text-input"
          onChange={(e) => setName(e.target.value)}
          name="text-input"
          id=""
          placeholder="Inserisci voce"
        ></textarea>
        <button type="submit" className="popup-button shadow">
          <span className="label-medium">Salva</span>
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="popup-button shadow"
        >
          <span className="label-medium">Chiudi</span>
        </button>
      </form>
    </section>
  );
};

export default Popup;

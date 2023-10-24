import { useEffect, useState, useRef } from "react";
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
  const popupRef: any = useRef();

  const formSubmit = () => {
    const task: ITask = {
      name: name,
      done: false,
    };

    addTask(task);
    setIsOpen(false);
    setName("");
  };

  // Popup closure when the click is out
  useEffect(() => {
    let closePopup = (e: any) => {
      if (!popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closePopup);

    return () => {
      document.removeEventListener("mousedown", closePopup);
    };
  });

  return (
    <section className="popup-section">
      <form className="popup" ref={popupRef} onSubmit={formSubmit}>
        <textarea
          className="text-input"
          onChange={(e) => setName(e.target.value)}
          name="text-input"
          id=""
          placeholder="Inserisci voce"
          autoFocus
        ></textarea>
        <button type="submit" className="popup-button shadow">
          <span className="label-medium">Salva</span>
        </button>
      </form>
    </section>
  );
};

export default Popup;

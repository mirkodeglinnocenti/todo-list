import { useState } from 'react'
import "./Popup.css";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <section className={isOpen ? "popup-section" : "hidden"}>
      <div className="popup">
        <textarea
          className="text-input"
          name=""
          id=""
          placeholder="Inserisci voce"
        ></textarea>
        <button className="popup-button shadow">
          <span className="label-medium">Salva</span>
        </button>
        <button onClick={() => setIsOpen(false)} className="popup-button shadow">
          <span className="label-medium">Chiudi</span>
        </button>
      </div>
    </section>
  );
};

export default Popup;

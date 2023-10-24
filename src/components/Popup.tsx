import "./Popup.css";

const Popup = ({setIsOpen} : {setIsOpen: (isOpen: boolean) => void}) => {

  return (
    <section className="popup-section">
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
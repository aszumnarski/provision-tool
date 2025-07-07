import "./Modal.css";
export const Modal = () => (
  <div className="modal">
    <div className="success-animation">
      <div className="checkmark"></div>
    </div>
    <div className="error-icon">
      <div className="circle"></div>
      <div className="cross cross1"></div>
      <div className="cross cross2"></div>
    </div>

    <div className="check-container">
      <div className="check-background">
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 25L27.3077 44L58.5 7"
            stroke="white"
            stroke-width="13"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="check-shadow"></div>
    </div>




<div className="containerxxx">
      <div className="circle-border"></div>
      <div className="circle">
          <div className="error"></div>
        </div>
      </div>
  </div>
);

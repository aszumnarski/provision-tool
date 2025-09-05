import "./Modal.css";
import { FormContext } from "../../context";
import { useContext } from "react";
export const Modal = () => {
  //@ts-ignore
  const { modalContent, setModalContent } = useContext(FormContext);

  const icons = {
    success: <SuccessAnim />,
    error: <ErrorAnim />,
  };

  if (!modalContent) return "";

  const onClick = () => {
    setModalContent(null);
  };
  return (
    <div className="modal__backdrop">
      <div className="modal">
        {icons[modalContent.type as keyof typeof icons] || ""}
        <h2 dangerouslySetInnerHTML={{ __html: modalContent?.message }} />
        <button className="magic-btn" onClick={onClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export const SuccessAnim = () => (
  <div className="check-container">
    <div className="check-background">
      <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 25L27.3077 44L58.5 7"
          stroke="white"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <div className="check-shadow"></div>
  </div>
);

export const ErrorAnim = () => (
  <div className="error-container">
    <div className="circle-border"></div>
    <div className="circle">
      <div className="error"></div>
    </div>
  </div>
);

import "./Modal.css";
export const Modal = () => {
  type TModalContent = { message: string; type: string } | undefined;
  let modalContent: TModalContent = {
    message: "Application <strong>1234</strong> was updated",
    type: "success",
  };

  modalContent = undefined;

  if (!modalContent) return "";

  return (
    <div className="modal__backdrop">
      <div className="modal">
        {modalContent && modalContent.type === "error" ? <ErrorAnim /> : <SuccessAnim />}
        <h2 dangerouslySetInnerHTML={{ __html: modalContent?.message }} />
        <button className="magic-btn">OK</button>
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
  <div className="containerxxx">
    <div className="circle-border"></div>
    <div className="circle">
      <div className="error"></div>
    </div>
  </div>
);

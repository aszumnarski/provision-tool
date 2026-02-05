export const preventEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  

  
export const preventArrowKeyIncrement = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  
  export const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
  if (document.activeElement === e.currentTarget) {
    //e.preventDefault();
    const target = e.currentTarget;
    target.blur();
    setTimeout(() => {
      target.focus?.();
    }, 0);
  }
};

  
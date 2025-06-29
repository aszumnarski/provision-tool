export const required = (message?: string) => {
  return {
    patterns: [
      {
        reg: "required",
        message: message || "This field is required",
      },
    ],
  };
};

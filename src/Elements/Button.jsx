export const Btn = ({ children, className }) => {
  return (
    <button
      className={`rounded-3xl bg-white px-6 py-2 shadow-xl shadow-slate-100 ${className}`}
    >
      {children}
    </button>
  );
};

export const BtnBlack = ({ children, className }) => {
  return (
    <button
      className={`rounded-3xl bg-black px-6 py-2 text-white ${className}`}
    >
      {children}
    </button>
  );
};

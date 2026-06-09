function Button({ Text, onClick, Type = "button", className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      type={Type}
      className={`inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-950/30 transition duration-200 hover:translate-y-[-1px] hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {Text}
    </button>
  );
}

export default Button;

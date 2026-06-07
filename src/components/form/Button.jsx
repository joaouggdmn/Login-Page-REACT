function Button({ Text, onClick, Type = "button"}) {
  return (
    <button
      onClick={onClick}
      type={Type}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
    >
      {Text}
    </button>
  );
}

export default Button;
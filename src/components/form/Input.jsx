function Input({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 shadow-sm outline-none transition duration-200 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 ${className}`}
      {...props}
    />
  );
}

export default Input;

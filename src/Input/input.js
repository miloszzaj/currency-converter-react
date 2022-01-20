const Input = ({ className, type, name, step, min, placeholder, required }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      step={step}
      min={min}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;

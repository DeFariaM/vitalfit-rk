"use client";
export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange = () => {},
  className,
  required = true,
  error = "",
}) {
  return (
    <div className="entryarea">
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        required={required}
      />
      <div className="labelline font-bebas">{label}</div>
      <p className="text-brand text-sm">{error}</p>
    </div>
  );
}

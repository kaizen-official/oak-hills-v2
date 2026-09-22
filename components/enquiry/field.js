export default function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  pattern,
}) {
  return (
    <label className="block">
      <span className="block text-sm text-oak-deep mb-1">
        {label}{required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        className="w-full px-4 py-3 bg-white border border-oak/20 text-oak-deep outline-none focus:border-bronze"
      />
    </label>
  );
}

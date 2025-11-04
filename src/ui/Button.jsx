export default function Button({ text, onClick, type = "primary" }) {
  const base = "px-5 py-2 rounded-lg font-semibold transition";
  const styles =
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";
  return <button className={`${base} ${styles}`} onClick={onClick}>{text}</button>;
}

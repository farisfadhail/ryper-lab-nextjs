export default function PaginateButton({ onClick, active = false, text }) {
  return (
    <button onClick={onClick} className={`text-bold p-2 rounded-lg min-w-10 ${active ? "bg-transparent border" : "bg-purple-900"}`}>
      {text}
    </button>
  );
}

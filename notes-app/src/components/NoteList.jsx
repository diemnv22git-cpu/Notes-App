export default function NoteList({ notes, onSelect, onDelete }) {
  return (
    <ul className="note-list">
      {notes.map((n) => (
        <li key={n.id} className="note-item" onClick={() => onSelect(n)}>
          <div className="note-title">
            {n.title || "📄 Ghi chú không tiêu đề"}
          </div>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(n.id);
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

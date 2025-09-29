import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("notes_app") || "[]");
    } catch {
      return [];
    }
  });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes_app", JSON.stringify(notes));
  }, [notes]);

  const handleSave = (id, title, content) => {
    if (id) {
      setNotes(notes.map((n) => (n.id === id ? { ...n, title, content } : n)));
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }
    setSelected(null);
  };

  const handleDelete = (id) => {
    if (confirm("Bạn có chắc muốn xóa ghi chú này?")) {
      setNotes(notes.filter((n) => n.id !== id));
      setSelected(null);
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>📝 Notes App</h2>
        <button className="new-btn" onClick={() => setSelected({})}>
          + New Note
        </button>
        <NoteList notes={notes} onSelect={setSelected} onDelete={handleDelete} />
      </aside>

      <main className="editor-area">
        {selected ? (
          <NoteEditor
            note={selected}
            onSave={handleSave}
            onCancel={() => setSelected(null)}
          />
        ) : (
          <div className="empty-msg">
            <h3>📌 Chào mừng!</h3>
            <p>Chọn một ghi chú từ danh sách hoặc tạo mới để bắt đầu.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

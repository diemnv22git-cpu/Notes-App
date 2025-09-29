import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note.title || "");
  const [content, setContent] = useState(note.content || "");

  return (
    <div className="editor-container">
      <input
        className="title-input"
        type="text"
        placeholder="Tiêu đề ghi chú..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="editor-split">
        <textarea
          className="text-input"
          placeholder="✍️ Viết nội dung ở đây... (Markdown hỗ trợ)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="preview">
          <h4>🔎 Xem trước</h4>
          <div className="preview-box">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="editor-buttons">
        <button className="save-btn" onClick={() => onSave(note.id, title, content)}>
          💾 Lưu
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          ❌ Hủy
        </button>
      </div>
    </div>
  );
}

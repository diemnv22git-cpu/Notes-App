# 📝 Notes App

Ứng dụng ghi chú đơn giản, hỗ trợ **Markdown cơ bản** và có thể hoạt động **offline**.  
Được xây dựng bằng **React + Vite**.

---

## 🚀 Tính năng
- Tạo ghi chú mới, chỉnh sửa và lưu lại.
- Hỗ trợ định dạng Markdown (in đậm, in nghiêng, tiêu đề, danh sách, link…).
- Xem trước (preview) nội dung Markdown ngay khi gõ.
- Xóa ghi chú khi không cần thiết.
- Lưu trữ cục bộ bằng **LocalStorage** → hoạt động cả khi offline.

---

## 🛠️ Công nghệ
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

---

## 📂 Cấu trúc thư mục
src/
├─ App.jsx
├─ main.jsx
├─ index.css
└─ components/
├─ NoteEditor.jsx
└─ NoteList.jsx

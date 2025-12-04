# L1 - Enhanced Todo List with localStorage and Search

## 📌 Features
- Add new tasks
- Mark tasks as completed / undo completion
- Delete tasks
- Search tasks in real time
- Tasks saved in localStorage
- Data persists even after refreshing the page

## 🗂 Task Structure
Each task is stored as a JSON object:

```json
{
  "id": 123456789,
  "text": "Buy groceries",
  "completed": false
}

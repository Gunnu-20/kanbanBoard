# Kanban Board

A simple, interactive Kanban Board application built with HTML, CSS, and JavaScript. This tool helps you organize tasks into three columns: Todo, In Progress, and Done, with drag-and-drop functionality and local storage persistence.

## Features

- **Drag and Drop**: Easily move tasks between columns by dragging them.
- **Add New Tasks**: Click the "Add new Task" button to create new tasks with title and description.
- **Delete Tasks**: Remove tasks using the delete button on each task card.
- **Persistent Storage**: Tasks are saved in your browser's local storage, so they persist between sessions.
- **Task Counters**: Each column displays the number of tasks it contains.
- **Responsive Design**: Clean, modern UI that works on different screen sizes.

## How to Use

1. **Open the Application**: Open `index.html` in your web browser.
2. **Add a Task**:
   - Click the "Add new Task" button in the top-right corner.
   - Enter a task title and description in the modal.
   - Click "Add Task" to create the task (it will appear in the Todo column).
3. **Move Tasks**: Drag any task card from one column to another.
4. **Delete Tasks**: Click the "Delete" button on any task card to remove it.
5. **Persistence**: Your tasks will be automatically saved and restored when you reopen the application.

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Functionality, drag-and-drop, and local storage

## Browser Support

Works in all modern browsers that support:
- HTML5 Drag and Drop API
- Local Storage API
- ES6 features

## File Structure

```
kanbanBoard/
├── index.html      # Main HTML file
├── style.css       # CSS styles
└── script.js       # JavaScript functionality
```

## Contributing

Feel free to fork this project and submit pull requests with improvements!

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
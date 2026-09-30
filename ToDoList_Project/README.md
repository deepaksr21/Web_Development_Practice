# Todo List

A fully functional Todo List application built using HTML, CSS, and JavaScript.

This project was built to strengthen my understanding of JavaScript fundamentals, DOM manipulation, event handling, state management, and browser storage.

## Features

- Add new tasks
- Add tasks using the Enter key
- Mark tasks as completed
- Undo completed tasks
- Edit existing tasks
- Cancel editing
- Delete individual tasks
- Delete all tasks using the Clear button
- Filter tasks:
  - All
  - Active
  - Completed
- Display task statistics:
  - Total Tasks
  - Completed Tasks
  - Remaining Tasks
- Persist tasks using `localStorage`
- Persist the currently selected filter using `localStorage`
- Tasks and UI state remain available after refreshing the page

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser `localStorage`

## JavaScript Concepts Practiced

This project helped me practice and understand:

- Variables and data types
- Arrays
- Objects
- Array of objects
- Functions
- Function parameters and arguments
- Callback functions
- `forEach()`
- `filter()`
- `map()`
- DOM manipulation
- `createElement()`
- `appendChild()`
- `querySelector()`
- `classList`
- Event listeners
- Event delegation
- `event.target`
- `event.currentTarget`
- `parentElement`
- `dataset`
- `data-*` attributes
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- `localStorage`
- State management
- Conditional rendering
- UI rendering
- Separating application data from UI

## Application Structure

The application maintains tasks as an array of objects.

Each task contains:

```javascript
{
    id: Date.now(),
    text: "Learn JavaScript",
    completed: false
}
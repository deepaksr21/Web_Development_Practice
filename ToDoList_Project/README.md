# To-Do List

A dynamic To-Do List web application built using HTML, CSS, and JavaScript.

This project was created as a learning project to understand how JavaScript interacts with the DOM and how user actions can dynamically update a webpage.

## Features

- Add new tasks
- Add tasks using the Enter key
- Mark tasks as completed
- Undo completed tasks
- Delete individual tasks
- Edit existing tasks
- Cancel editing
- Delete a task when its edited text is empty
- Clear all tasks
- Filter tasks:
  - All
  - Active
  - Done
- Display task statistics:
  - Total tasks
  - Completed tasks
  - Remaining tasks
- Dynamically create and remove DOM elements
- Event delegation for task buttons
- Unique task IDs using `Date.now()`

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Practiced

This project helped me practice:

- DOM Manipulation
- `querySelector()`
- `createElement()`
- `appendChild()`
- `replaceWith()`
- `remove()`
- `classList`
- `dataset`
- Event Listeners
- Keyboard Events
- Mouse Events
- Event Delegation
- Arrays
- Objects
- `forEach()`
- `filter()`
- Arrow Functions
- Template Literals
- Conditional Statements
- Functions
- Array Mutation
- Object Properties
- Passing Arrays as Function Arguments

## Task Data Structure

Each task is stored as an object:

```javascript
{
    id: Date.now(),
    text: "Learn JavaScript",
    completed: false
}
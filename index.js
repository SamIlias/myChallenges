import _ from 'lodash';
import * as todo from './4_abstractionWithData/3_todoList/todo.js';

const tasks = [];

const task1 = todo.createTask('task-1', ['work', 'urgent', 'home']);
const task2 = todo.createTask('task-2', []);
const task3 = todo.createTask('task-3', ['urgent', 'work']);
const task4 = todo.createTask('task-4', ['work']);
const task5 = todo.createTask('task-5', ['work']);
const task6 = todo.createTask('task-6', ['work', 'easy']);
const task7 = todo.createTask('task-7', ['home', 'urgent']);

todo.addTask(tasks, task2);
console.log(tasks);

todo.addTask(tasks, task3);
todo.addTask(tasks, task4);
todo.addTask(tasks, task5);
todo.addTask(tasks, task6);
todo.addTask(tasks, task7);

todo.addTagToTask(tasks, 101, 'newTag');
todo.addTagToTask(tasks, 101, 'newTag');
todo.removeTagFromTask(tasks, 101, 'newTag');
todo.markTaskCompleted(tasks, 101);

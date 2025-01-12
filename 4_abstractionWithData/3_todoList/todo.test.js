import * as todo from './todo';

test('todo API test', () => {
  const tasks = [];

  const task1 = todo.createTask('task-1', ['work', 'urgent', 'home']);
  const task2 = todo.createTask('task-2', []);
  const task3 = todo.createTask('task-3', ['urgent', 'work']);
  const task4 = todo.createTask('task-4', ['work']);
  const task5 = todo.createTask('task-5', ['work']);
  const task6 = todo.createTask('task-6', ['work', 'easy']);
  const task7 = todo.createTask('task-7', ['home', 'urgent']);

  todo.addTask(tasks, task1);
  todo.addTask(tasks, task2);
  todo.addTask(tasks, task3);
  todo.addTask(tasks, task4);
  todo.addTask(tasks, task5);
  todo.addTask(tasks, task6);
  todo.addTask(tasks, task7);

  expect(tasks).toEqual([
    {
      id: 1,
      description: 'task-1',
      completed: false,
      tags: ['work', 'urgent', 'home'],
    },
    {
      id: 2,
      description: 'task-2',
      completed: false,
      tags: [],
    },
    {
      id: 3,
      description: 'task-3',
      completed: false,
      tags: ['urgent', 'work'],
    },
    {
      id: 4,
      description: 'task-4',
      completed: false,
      tags: ['work'],
    },
    {
      id: 5,
      description: 'task-5',
      completed: false,
      tags: ['work'],
    },
    {
      id: 6,
      description: 'task-6',
      completed: false,
      tags: ['work', 'easy'],
    },
    {
      id: 7,
      description: 'task-7',
      completed: false,
      tags: ['home', 'urgent'],
    },
  ]);

  todo.addTagToTask(tasks, 2, 'newTag');
  todo.addTagToTask(tasks, 2, 'newTag');
  todo.addTagToTask(tasks, 3, 'newTag');
  todo.removeTagFromTask(tasks, 4, 'newTag');
  todo.removeTagFromTask(tasks, 4, 'work');
  todo.markTaskCompleted(tasks, 1);

  expect(tasks).toEqual([
    {
      id: 1,
      description: 'task-1',
      completed: true,
      tags: ['work', 'urgent', 'home'],
    },
    {
      id: 2,
      description: 'task-2',
      completed: false,
      tags: ['newTag'],
    },
    {
      id: 3,
      description: 'task-3',
      completed: false,
      tags: ['urgent', 'work', 'newTag'],
    },
    {
      id: 4,
      description: 'task-4',
      completed: false,
      tags: [],
    },
    {
      id: 5,
      description: 'task-5',
      completed: false,
      tags: ['work'],
    },
    {
      id: 6,
      description: 'task-6',
      completed: false,
      tags: ['work', 'easy'],
    },
    {
      id: 7,
      description: 'task-7',
      completed: false,
      tags: ['home', 'urgent'],
    },
  ]);

  expect(todo.filterTasksByTags(tasks, ['work', 'urgent'])).toEqual([
    {
      id: 1,
      description: 'task-1',
      completed: true,
      tags: ['work', 'urgent', 'home'],
    },
    {
      id: 3,
      description: 'task-3',
      completed: false,
      tags: ['urgent', 'work', 'newTag'],
    },
  ]);

  expect(todo.filterTasksByTags(tasks, [])).toEqual([
    {
      id: 1,
      description: 'task-1',
      completed: true,
      tags: ['work', 'urgent', 'home'],
    },
    {
      id: 2,
      description: 'task-2',
      completed: false,
      tags: ['newTag'],
    },
    {
      id: 3,
      description: 'task-3',
      completed: false,
      tags: ['urgent', 'work', 'newTag'],
    },
    {
      id: 4,
      description: 'task-4',
      completed: false,
      tags: [],
    },
    {
      id: 5,
      description: 'task-5',
      completed: false,
      tags: ['work'],
    },
    {
      id: 6,
      description: 'task-6',
      completed: false,
      tags: ['work', 'easy'],
    },
    {
      id: 7,
      description: 'task-7',
      completed: false,
      tags: ['home', 'urgent'],
    },
  ]);
});

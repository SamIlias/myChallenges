let currentId = 0;
const uniqId = () => {
  currentId += 1;
  return currentId;
};

const filterByUnique = items => {
  return items.filter((curEl, curInd, arr) => curInd === arr.indexOf(curEl));
};

const getTaskById = (tasks, taskId) => {
  let task;
  tasks.forEach(item => {
    if (item.id === taskId) {
      task = item;
    }
  });

  return task;
};
//= =====================================

/* eslint-disable no-param-reassign */
export const createTask = (description, tags) => {
  const newTask = {
    id: uniqId(),
    description,
    completed: false,
    tags: filterByUnique(tags),
  };

  return newTask;
};

export const addTask = (tasks, task) => {
  tasks.push(task);

  return tasks;
};

export const addTagToTask = (tasks, taskId, tag) => {
  const task = getTaskById(tasks, taskId);
  if (task) {
    task.tags.push(tag);
    const newTags = filterByUnique(task.tags);
    task.tags = newTags;
  }

  return tasks;
};

export const removeTagFromTask = (tasks, taskId, tag) => {
  const task = getTaskById(tasks, taskId);
  if (task) {
    const newTags = task.tags.filter(item => item !== tag);
    task.tags = newTags;
  }

  return tasks;
};

export const markTaskCompleted = (tasks, taskId) => {
  const task = getTaskById(tasks, taskId);
  if (task) {
    task.completed = true;
  }

  return tasks;
};

const includesAllItems = (arr, filterItems) => {
  return filterItems.every(item => arr.includes(item));
};

export const filterTasksByTags = (tasks, filterTags = []) => {
  const newTasks = tasks.filter(task =>
    includesAllItems(task.tags, filterTags),
  );

  return newTasks;
};

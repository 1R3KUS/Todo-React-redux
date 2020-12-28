export const addListAction = (obj) => ({
  type: 'ADD_LIST',
  payload: obj,
});

export const removeListAction = (id) => ({
  type: 'REMOVE_LIST',
  payload: id,
});

export const setActiveList = (id) => ({
  type: 'ACTIVE_LIST',
  payload: id,
});

export const addTaskAction = (obj) => ({
  type: 'ADD_TASK',
  payload: obj,
});

export const removeTaskAction = (obj) => ({
  type: 'REMOVE_TASK',
  payload: obj,
});

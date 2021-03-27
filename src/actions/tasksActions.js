import axios from "axios";

import {
  GET_TASKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  ADD_TASK,
} from "../types/tasksTypes";

export const getTasks = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tasks = {};
    response.data.map(
      (item) =>
        (tasks[item.userId] = {
          ...tasks[item.id],
          [item.id]: {
            ...item,
          },
        })
    );
    dispatch({
      type: GET_TASKS,
      payload: tasks,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const changeUserId = (id) => (dispatch) => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: id,
  });
};

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title,
  });
};

export const addTask = (newTask) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTask
    );
    console.log(response.data);
    dispatch({
      type: ADD_TASK,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const editTask = (newTask) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${newTask.id}`,
      newTask
    );
    console.log(response.data);
    dispatch({
      type: ADD_TASK,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(response.data);
    dispatch({
      type: GET_TASKS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

import axios from "axios";

import {
  GET_TASKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
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

export const changeUserId = (id) => async (dispatch) => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: id,
  });
};

export const changeTitle = (title) => async (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title,
  });
};

import axios from "axios";

import { GET_PUBLICATIONS, LOADING, ERROR } from "../types/publicationTypes";

export const getPublications = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: GET_PUBLICATIONS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getPublicationById = (index) => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const userId = users[index].id;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  dispatch({
    type: GET_PUBLICATIONS,
    payload: response.data,
  });
};

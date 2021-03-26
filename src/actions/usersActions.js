export const getUsers = () => (dispatch) => {
  dispatch({
    type: "get_users",
    payload: [],
  });
};

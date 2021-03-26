import { GET_PUBLICATIONS, LOADING, ERROR } from "../types/publicationTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: "",
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

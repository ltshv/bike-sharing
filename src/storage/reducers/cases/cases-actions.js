export const CASES_ACTIONS = {
  GET_ALL_CASES: "GET_ALL_CASES",
  GET_SINGLE_CASE: "GET_SINGLE_CASE",
  CREATE_PUBLIC_CASE: "CREATE_PUBLIC_CASE",
  CREATE_CASE: "CREATE_CASE",
  EDIT_CASE: "EDIT_CASE",
  DELETE_CASE: "DELETE_CASE",
};

export const getCases = () => {
  return {
    type: CASES_ACTIONS.GET_ALL_CASES,
  };
};

export const getSingleCase = (id = String()) => {
  return {
    type: CASES_ACTIONS.GET_SINGLE_CASE,
    id,
  };
};

export const createCase = (data = Object(), clientID = String()) => {
  if (clientID) {
    return {
      type: CASES_ACTIONS.CREATE_CASE,
      data: { ...data, clientID },
    };
  }
  return {
    type: CASES_ACTIONS.CREATE_CASE,
    data: data,
  };
};

export const editCase = (id, data) => {
  return {
    type: CASES_ACTIONS.EDIT_CASE,
    id,
    data: data,
  };
};

export const deleteCase = (id) => {
  return {
    type: CASES_ACTIONS.EDIT_CASE,
    id,
  };
};

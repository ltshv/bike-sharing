import { CASES_ACTIONS } from "./cases-actions";
import axios from "axios";

async function getCases() {
  const options = {};

  try {
    await axios
      .get(`https://sf-final-project-be.herokuapp.com/api/cases/`, options)
      .then((result) => {
        return result.data;
      });
  } catch (err) {
    console.error(err);
  }
}
const initialState = {
  cases: getCases() || [
    {
      _id: "64369131d198704855a7bd61",
      status: "new",
      licenseNumber: "56y34gwrtgrt",
      type: "sport",
      ownerFullName: "John Doe",
      clientId: "19d6066c-9ecf-4516-aa73-ad0165f424c7",
      createdAt: "2023-04-12T11:08:33.598Z",
      updatedAt: null,
      color: "black",
      date: "2015-03-25T00:00:00.000Z",
      officer: null,
      description: "My first case",
      resolution: null,
      __v: 0,
    },
    {
      _id: "erwetgdfgd",
      status: "new",
      licenseNumber: "dfgh;ldf,fg",
      type: "general",
      ownerFullName: "John Kongfs",
      clientId: "19d6066c-9ecf-4516-aa73-ad0165f424c7",
      createdAt: "2023-04-12T11:08:33.598Z",
      updatedAt: null,
      color: "black",
      date: "2015-03-25T00:00:00.000Z",
      officer: null,
      description: "My second case",
      resolution: null,
      __v: 0,
    },
  ],
};

function handleCasesActions(state = initialState, action) {
  switch (action.type) {
    case CASES_ACTIONS.GET_ALL_CASES:
      return { ...state, cases: state.cases };
    default:
      return state;
  }
}

export default handleCasesActions;

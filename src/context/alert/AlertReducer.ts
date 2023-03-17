import { Alert, AlertReducer } from "../../types";

type Action = { type: "SET_ALERT"; payload: Alert } | { type: "REMOVE_ALERT" };

const alertReducer = (state: AlertReducer, action: Action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;

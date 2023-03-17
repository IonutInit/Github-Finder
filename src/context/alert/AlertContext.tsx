import { createContext, useReducer, PropsWithChildren } from "react";
import alertReducer from "./AlertReducer";

import { AlertContextProps, AlertReducer } from "../../types";

export const AlertContext = createContext<AlertContextProps>({
  alert: null,
  setAlert: () => {},
});

export const AlertProvider = ({
  children,
}: PropsWithChildren<AlertContextProps>) => {
  const initialState: AlertReducer = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000
    );
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

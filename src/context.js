import {createContext, useReducer} from "react";

export const ContextTheme = createContext();

const init_state = { ModeDark: false };

const ReduceTheme = (state, action) => {
  switch (action.type) {
    case "Toggle_Switch":
      return { ModeDark: !state.ModeDark };
    default:
      return state;
  }
};

export const ProvideTheme = (props) => {
  const [state, dispatch] = useReducer(ReduceTheme, init_state);

  return (
    <ContextTheme.Provider value={{state, dispatch}}>{props.children}</ContextTheme.Provider>
  );
};
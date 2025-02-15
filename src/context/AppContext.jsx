import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  score: 0,
  pcHand: null,
  userHand: null,
  states: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "userPick": {
      return { ...state, userHand: action.payload };
    }
    case "pcPick": {
      return { ...state, pcHand: action.payload };
    }
    case "win": {
      return {
        ...state,
        states: "win",
        score: state.score + 1,
      };
    }
    case "lose": {
      return {
        ...state,
        states: "lose",
        score: state.score - 1,
      };
    }
    case "equal": {
      return {
        ...state,
        states: "equal",
        score: state.score,
      };
    }
    case "playAgain": {
      return { ...state, pcHand: null, userHand: null, states: "" };
    }

    default: {
      throw new Error("Unknown action");
    }
  }
}

function AppProvider({ children }) {
  const [{ userHand, pcHand, score, states }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <AppContext.Provider
      value={{
        userHand,
        pcHand,
        score,
        states,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of AppProvider");
  return context;
}

export { AppProvider, useApp };

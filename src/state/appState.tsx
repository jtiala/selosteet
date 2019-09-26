import React from "react";

export interface AppState {
  siteName: string;
  siteUrl: string;
}

export const initialState: AppState = {
  siteName: "",
  siteUrl: ""
};

export enum AppActionTypes {
  RESET = "reset",
  SET_SITE_NAME = "setSiteName",
  SET_SITE_URL = "setSiteUrl"
}

export type AppAction =
  | { type: AppActionTypes.RESET }
  | {
      type: AppActionTypes.SET_SITE_NAME | AppActionTypes.SET_SITE_URL;
      value: string;
    };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.RESET:
      return initialState;
    case AppActionTypes.SET_SITE_NAME:
      return {
        ...state,
        siteName: action.value
      };
    case AppActionTypes.SET_SITE_URL:
      return {
        ...state,
        siteUrl: action.value
      };
  }

  return state;
};

const AppStateContext = React.createContext(initialState);

const AppDispatchContext = React.createContext((() =>
  undefined) as React.Dispatch<AppAction>);

export const AppStateProvider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }

  return context;
};

export const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppStateProvider");
  }

  return context;
};

import React from "react";
import i18n from "../i18n/i18n";

export enum Sections {
  GENERAL = "general",
  REGISTER = "register"
}

export interface AppState {
  sections: {
    [Sections.GENERAL]: {
      [key: string]: string;
    };
    [Sections.REGISTER]: {
      [key: string]: string;
    };
  };
}

const getPlaceholder = (section: Sections, field: string): string =>
  i18n.t(`${section}:fields:${field}:placeholder`);

export const initialState: AppState = {
  sections: {
    [Sections.GENERAL]: {
      siteName: getPlaceholder(Sections.GENERAL, "siteName"),
      siteUrl: getPlaceholder(Sections.GENERAL, "siteUrl")
    },
    [Sections.REGISTER]: {
      controller: getPlaceholder(Sections.REGISTER, "controller"),
      contactPerson: getPlaceholder(Sections.REGISTER, "contactPerson"),
      name: getPlaceholder(Sections.REGISTER, "name"),
      legalBasis: getPlaceholder(Sections.REGISTER, "legalBasis"),
      purpose: getPlaceholder(Sections.REGISTER, "purpose"),
      dataContent: getPlaceholder(Sections.REGISTER, "dataContent"),
      dataSources: getPlaceholder(Sections.REGISTER, "dataSources"),
      dataDisclosureTransferAndStorage: getPlaceholder(
        Sections.REGISTER,
        "dataDisclosureTransferAndStorage"
      ),
      securityPrinciples: getPlaceholder(
        Sections.REGISTER,
        "securityPrinciples"
      ),
      dataSubjectsRights: getPlaceholder(
        Sections.REGISTER,
        "dataSubjectsRights"
      )
    }
  }
};

export enum AppActionTypes {
  RESET = "reset",
  SET_FIELD_VALUE = "setFieldValue"
}

export type AppAction =
  | { type: AppActionTypes.RESET }
  | {
      type: AppActionTypes.SET_FIELD_VALUE;
      payload: {
        section: keyof AppState["sections"];
        field: string;
        value?: string;
      };
    };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.RESET:
      return initialState;
    case AppActionTypes.SET_FIELD_VALUE:
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload.section]: {
            ...state.sections[action.payload.section],
            [action.payload.field]: action.payload.value
          }
        }
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

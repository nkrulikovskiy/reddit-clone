import { Theme } from "@material-ui/core";
import { createContext, useContext, useState } from "react";
import { light } from "../theme";

type UIContextStatus = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const initialUIStatus: UIContextStatus = {
  theme: light,
  changeTheme: () => {},
};

const UIContext = createContext(initialUIStatus);

export const UIProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light);
  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };
  return <UIContext.Provider value={{ theme, changeTheme }}>{children}</UIContext.Provider>;
};

export const useUIStore = () => useContext(UIContext);

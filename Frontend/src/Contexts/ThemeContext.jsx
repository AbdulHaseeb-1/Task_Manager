import { createContext, useContext, useState } from "react";

const Themes = {
  Light: {
    Background: "transition bg-[rgb(21,21,21)]",
    Text: "transition  text-gray-200",
    Hover:"hover:bg-[rgb(30,30,30)]",
    Label:"Light",
    Shadow:"transition shadow-stone-800"
},

Dark: {
    Background: "transition bg-[#F5F5F5]",
    Text: "transition text-black",
    Hover:" hover:bg-gray-200",
    Label:"Dark",
    Shadow:"transition shadow-gray-200"

  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState(Themes.Dark);

  return (
    <ThemeContext.Provider value={{Theme, setTheme, Themes}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const AllThemes = () => useContext(ThemeContext);

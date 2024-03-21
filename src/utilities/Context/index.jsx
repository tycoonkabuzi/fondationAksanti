import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [album, setAlbum] = useState(0);
  const [tracker, setTracker] = useState(0);
  return (
    <ThemeContext.Provider
      value={{ clicked, setClicked, album, setAlbum, tracker, setTracker }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

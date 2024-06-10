import React, { createContext, useContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [ isLightTheme, toggleTheme ] = useToggleState(false);

        return (
            <ThemeContext.Provider value={{ isLightTheme: isLightTheme, toggleTheme: toggleTheme }}>
                {props.children}
            </ThemeContext.Provider>
        )
}
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [ language, setLanguage ] = useState("english");
    const changeLanguage = e => setLanguage(e.target.value);
        return (
            <LanguageContext.Provider value={{ language: language, changeLanguage: changeLanguage }}>
                {props.children}
            </LanguageContext.Provider>
        )
}
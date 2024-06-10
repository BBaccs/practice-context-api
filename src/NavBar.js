import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
    english: {
      search: 'Search',
      flag: '🇬🇧',
      buttonTxt: 'Switch to',
      light: 'Light',
      dark: 'Dark'
    },
    french: {
      search: 'Chercher',
      flag: '🇫🇷',
      buttonTxt: 'Passer à',
      light: 'Clair',
      dark: 'Sombre'
    },
    spanish: {
      search: 'Buscar',
      flag: '🇪🇸',
      buttonTxt: 'Cambiar a',
      light: 'Claro',
      dark: 'Oscuro'
    }
  };

function NavBar(props) {
        // const { language } = this.props.languageContext;
        const { isLightTheme, toggleTheme } = useContext(ThemeContext);
        const { language } = useContext(LanguageContext);
        const { search, flag, buttonTxt, light, dark } = content[language] || content.english;
        const styles = {
            backgroundColor: isLightTheme ? 'black' : 'white',
            color: isLightTheme ? 'white' : 'black'
        };
        return (
            <div style={{ backgroundColor: styles.backgroundColor }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', color: styles.color }}>
                    <span> nav {language} {flag}</span>
                    <button onClick={toggleTheme}>{buttonTxt} {isLightTheme ? light : dark} </button>
                    <form action="/search" method="get" style={{ marginTop: '10px' }}>
                        <label style={{display: 'none'}} htmlFor="search-input">{search}:</label>
                        <input type="search" id="search-input" name="search" placeholder={`${search}...`} />
                        <button type="submit">{search}</button>
                    </form>
                </nav>
            </div>
        );
}

export default NavBar;

import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';
// import { useContext } from 'react';

const content = {
    english: {
        search: 'Search',
        flag: '🇬🇧'
    },
    french: {
        search: 'Chercher',
        flag: '🇫🇷'
    },
    spanish: {
        search: 'Buscar',
        flag: '🇪🇸'
    }
};

class NavBar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, toggleTheme } = this.context;
        const styles = {
            backgroundColor: isLightTheme ? 'black' : 'white',
            color: isLightTheme ? 'white' : 'black'
        };
        const { language } = this.props.languageContext;
        const { search, flag } = content[language] || content.english; // Fallback to English if language key is not found

        return (
            <div style={{ backgroundColor: styles.backgroundColor }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', color: styles.color }}>
                    <span> nav {language} {flag}</span>
                    <button onClick={toggleTheme}>Switch to {isLightTheme ? 'light' : 'dark'} </button>
                    <form action="/search" method="get" style={{ marginTop: '10px' }}>
                        <label htmlFor="search-input">{search}:</label>
                        <input type="search" id="search-input" name="search" placeholder={`${search}...`} />
                        <button type="submit">{search}</button>
                    </form>
                </nav>
            </div>
        );
    }
}

export default withLanguageContext(NavBar);

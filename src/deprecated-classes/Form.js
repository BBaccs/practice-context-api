// USE CONTEXT + CLASS BASED COMPONENTS

import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
    english: {
        email: "Email",
        password: "Password",
        remember: 'Remember me',
        signIn: 'Sign In',
        pickLanguage: 'Language'
    },
    french: {
        email: "Adresse électronique",
        password: "Mot de passe",
        remember: 'Se souvenir de moi',
        signIn: 'Se connecter',
        pickLanguage: 'Langue'
    },
    spanish: {
        email: "Correo electrónico",
        password: "Contraseña",
        remember: 'Recordarme',
        signIn: 'Iniciar sesión',
        pickLanguage: 'Idioma'
    }
};

function Form(props) {
        const { language, changeLanguage, isLightTheme } = useContext(LanguageContext);
        // const { isLightTheme } = this.context;
        const { email, password, remember, pickLanguage, signIn } = words[language];
        const styles = {
            body: {
                fontFamily: 'Arial, sans-serif',
                backgroundColor: isLightTheme ? '#f0f0f0' : 'black',
                padding: '20px'
            },
            formContainer: {
                maxWidth: '400px',
                margin: '0 auto',
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            },
            label: {
                fontWeight: 'bold'
            },
            input: {
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            },
            checkboxLabel: {
                fontWeight: 'bold'
            },
            button: {
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
            },
            select: {
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            },
            nav: {
                display: 'flex',
                justifyContent: 'space-around'
            }        
    }
    return (
        <div style={styles.body}>
            <h2 style={{textAlign: 'center'}}>Login Form</h2>
            <form style={styles.formContainer}>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="email" style={styles.label}>{email}</label>
                    <input type="email" id="email" name="email" style={styles.input} />
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="password" style={styles.label}>{password}:</label>
                    <input type="password" id="password" name="password" style={styles.input} />
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="remember" style={styles.checkboxLabel}>
                        <input type="checkbox" id="remember" name="remember" /> {remember}
                    </label>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <button type="submit" style={styles.button}>{signIn}</button>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="language" style={styles.label}>{pickLanguage}:</label>
                    <select id="language" name="language" onChange={changeLanguage} style={styles.select}>
                        <option value='english'>English</option>
                        <option value='spanish'>Spanish</option>
                        <option value='french'>French</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;

import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

const words = {
    english: {
      email: "Email",
      password: "Password",
      remember: 'Remember me',
      signIn: 'Sign In',
      pickLanguage: 'Language',
      loginForm: 'Login Form'
    },
    french: {
      email: "Adresse électronique",
      password: "Mot de passe",
      remember: 'Se souvenir de moi',
      signIn: 'Se connecter',
      pickLanguage: 'Langue',
      loginForm: 'Formulaire de connexion'
    },
    spanish: {
      email: "Correo electrónico",
      password: "Contraseña",
      remember: 'Recordarme',
      signIn: 'Iniciar sesión',
      pickLanguage: 'Idioma',
      loginForm: 'Formulario de inicio de sesión'
    }
  };
function Form(props) {
        const { language, changeLanguage } = useContext(LanguageContext);
        const { isLightTheme } = useContext(ThemeContext);
        const { email, password, remember, pickLanguage, signIn, loginForm } = words[language];
        const styles = {
            body: {
                fontFamily: 'Arial, sans-serif',
                backgroundColor: !isLightTheme ? 'white' : 'black',
                padding: '40px',
                color: !isLightTheme ? 'black' : 'white'
            },
            formContainer: {
                maxWidth: '400px',
                margin: '0 auto',
                backgroundColor: '#fff',
                color: '#000',
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
            }
    }
    return (
        <div style={styles.body}>
            <h2 style={{textAlign: 'center'}}>{loginForm}</h2>
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

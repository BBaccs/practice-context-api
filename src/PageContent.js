import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function PageContent(props) {
    const { isLightTheme } = useContext(ThemeContext);
    const styles = {
        color: isLightTheme ? 'white' : 'black',
        backgroundColor: isLightTheme ? 'black' : 'white',
        height: "100vh",
        width: "100vw",
        fontSize: '1.5rem'
    }
    return (
        <div style={styles}>
            {props.children}
            <div>
                This is the pagecontent component, it will change based on the theme context which is toggled on the button in the navbar component. The lang will not change.
            </div>
        </div>
    )
}
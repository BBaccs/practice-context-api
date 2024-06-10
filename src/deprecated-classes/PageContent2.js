import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default class PageContent extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme } = this.context;
        const styles = {
            color: 'black',
            height: "100vh",
            width: "100vw",
            fontSize: '1.5rem'
        }
        return (
            <div style={styles}>
                {this.props.children}
                <div style={{ color: isLightTheme ? 'white' : 'black', backgroundColor: isLightTheme ? 'black' : 'white' }}>
                    This is the pagecontent component, it will change based on the theme context which is toggled on the button in the navbar component. The lang will not change.
                </div>
            </div>
        )
    }
}
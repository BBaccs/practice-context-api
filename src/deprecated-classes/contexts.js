import React, { createContext, Component } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: 'english' };
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e) {
       this.setState({ language: e.target.value });
       console.log(e.target.value)
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}



// Only needed for class based components in the LanguageContext.js file
export const withLanguageContext = (Component) => (props) => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
);
// import React, { Component } from 'react';
// import './App.css';
// import NavBar from './NavBar';
// import PageContent from './PageContent';
// import { ThemeProvider } from './contexts/ThemeContext';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lightTheme: true
//     };
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }

//   toggleTheme() {
//     this.setState(prevState => ({
//       lightTheme: !prevState.lightTheme
//     }));
//   }
//   render() {
//     const { lightTheme } = this.state;
//     const backgroundColor = lightTheme ? 'white' : 'black';
//     const textColor = lightTheme ? 'black' : 'white';

//     return (
//       <ThemeProvider>
//         <PageContent>
//           <NavBar lightTheme={this.state.lightTheme} onToggleTheme={this.toggleTheme} />
//           <br />
//           <div style={{ backgroundColor, color: textColor }}>
//             My background will change colors when the button is clicke. Currently the background color is {backgroundColor} & the text color is {textColor}
//           </div>
//           <br />
//           <div style={{ backgroundColor, color: textColor }}>
//             My language is set to english but can be changed to spanish or french. Try it out.
//           </div>
//         </PageContent>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
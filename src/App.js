import React from 'react';
import './App.css';
import NavBar from './NavBar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import Form from './Form';
import { LanguageProvider } from './contexts/LanguageContext';
import CounterHooks from './playingWithHooks/CounterHooks';
import Toggler from './playingWithHooks/Toggler';
import SimpleFormInputHooks from './playingWithHooks/SimpleFormInputHook';
import Clicker from './playingWithHooks/Clicker';
import Swapi from './playingWithHooks/Swapi';
import PlayingWithUseReducer from './playingWithHooks/PlayingWithUseReducer';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <br />
          <div >
            Testing (no language changes should show near this text)
          </div>
          <br />
          <Clicker />
          <br />
          <Swapi />
          <SimpleFormInputHooks />
          <CounterHooks />
          <Toggler />
          <Form />
          <PlayingWithUseReducer />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}


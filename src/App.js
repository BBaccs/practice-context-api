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
          <SimpleFormInputHooks />
          <CounterHooks />
          <Toggler />
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}


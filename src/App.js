import React from 'react';
import './App.css';
import NavBar from './NavBar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import Form from './Form';
import { LanguageProvider } from './contexts/LanguageContext';
import CounterHooks from './playingWithHooks/CounterHooks';

export default function App() {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <PageContent>
            <NavBar />
            <br />
            <div >
              Testing (no lang changes should show here)
            </div>
            <br />
            <Form />
            <CounterHooks />
          </PageContent>
        </ThemeProvider>
      </LanguageProvider>
    );
  }


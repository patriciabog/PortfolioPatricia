import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

const updateAppLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

const renderApp = (lng) => {
  updateAppLanguage(lng);

  const root = createRoot(document.getElementById('root'));
  root.render(
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  );
};

renderApp('en'); 


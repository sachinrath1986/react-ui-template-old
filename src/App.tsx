import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './core/layout/AppThemeProvider';

import AuthInit from './modules/auth/AuthInit';
import Routes from './modules/Routes';
import { I18nProvider } from './core/i18n/i18nProvider';

const App = () => {
 
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AuthInit>
          <I18nProvider>
            <Routes />
          </I18nProvider>
        </AuthInit>
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;

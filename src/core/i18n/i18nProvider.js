import { IntlProvider } from "react-intl";

import enMessages from "./messages/en";

const allMessages = {
    en: enMessages
};

export function I18nProvider({ children }) {
    const messages = allMessages['en'];

    return (
        <IntlProvider locale={'en'} messages={messages}>
            {children}
        </IntlProvider>
    );
}
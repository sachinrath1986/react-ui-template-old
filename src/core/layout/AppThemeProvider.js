import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["Poppins"].join(",")
    },
    palette: {
        primary: {
            main: "#17c191"
        },
        secondary: {
            main: "#3783e7"
        },
        error: {
            main: "#f018a6"
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: false // No more ripple, on the whole application 💣!
        },
        MuiPopover: {
            elevation: 1
        }
    }
});

export const AppThemeProvider = ({children}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
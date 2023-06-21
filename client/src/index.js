import {React} from "react";
import {ReactDOM} from "react-dom/client";
import {App} from "./App";

import {theme} from "./styles/theme";
import {CssBaseline} from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>

        <App />

    </ThemeProvider>
);

import * as React from 'react';
import {createRoot} from "react-dom/client";
import App from "./App.js";
import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>


        <App />
  </ThemeProvider>
);

import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import App from "./app/app";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

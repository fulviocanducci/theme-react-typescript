import { render } from "react-dom";

import ThemeProvider from "./context/ThemeProvider";
import App from "./components/App";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);

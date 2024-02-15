import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import Tablericons from "./Components/Tablericons.js";
// defaultTheme
import themes from "./themes";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes("customization")}>
        <CssBaseline />
        <Tablericons />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

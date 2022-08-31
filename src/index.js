import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import About from "./page/About";
import NoPage from "./page/NoPage";
import { blue, grey, red, } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ed1e1c',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/Resident-Evil-Timeline" element={<Layout />}>
            <Route index element={ <Navigate to="home" /> } />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
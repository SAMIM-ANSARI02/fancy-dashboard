import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Topbar from "./scenes/golabal/Topbar";
import Sidebar from "./scenes/golabal/sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/Team/index";
import Invoices from "./scenes/Invoices";
import Contact from "./scenes/contact/index";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line/index";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Pie from "./scenes/Pie";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/invoice" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

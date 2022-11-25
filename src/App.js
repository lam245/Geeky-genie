import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import HomePage from "./scenes/HomePage";
import Header from "./scenes/Header";
import Footer from "./scenes/footer";
import Search from "./scenes/search"
import BookDetail from "./Book_detail";
import CommentModal from "./scenes/comment/CommentModal";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            
            <Routes>
              <Route path="/home" element={<><Header /> <Search /> <HomePage /> <Footer /> </>}/>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/form" element={<Form />} />
              <Route path="/book" element={<> <BookDetail />   </>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

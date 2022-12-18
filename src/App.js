import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import HomePage from "./scenes/HomePage";
import Header from "./scenes/header";
import Footer from "./scenes/footer";
import Search from "./scenes/search"
import BookDetail from "./scenes/Book_detail";
import Register from "./scenes/register";
import Login from "./scenes/login";
import Reading from "./scenes/reading";
import CommentModal from "./scenes/comment/CommentModal";
import Accounts from "./scenes/accounts";
import Author from "./scenes/Author";

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
              <Route path="/" element={<><Header /> <HomePage /> <Footer /> </>}/>
              <Route path="/register" element={<><Header /> <Register /> <Footer /> </>}/>
              <Route path="/search" element={<><Header /> <Search /> <Footer /> </>}/>
              <Route path="/login" element={<><Header /> <Login /> <Footer /> </>}/>
              <Route path="/reading" element={<><Header /> <Reading /> <Footer /> </>}/>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/form" element={<Form />} />
              <Route path="/book/:auth_id" element={<> <Header /> <BookDetail /> <Footer /> </>} />
              <Route path="/account" element= {<> <Header /> <Accounts /> <Footer /> </>} />
              <Route path="/author/:auth_id" element= {<Author />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

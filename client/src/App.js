import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./features/main/Layout.js"
import theme from './theme';
import { ThemeProvider } from "@mui/material/styles"
import Login from './features/main/Login.js';
import { CacheProvider } from '@emotion/react';
import { cacheRtl } from './theme';
import LayoutPersonalArea from './features/personalArea/Layout.js';
import Forums from './features/personalArea/community/forums.js';
import Treads from './features/personalArea/community/Treads.js';
import NewThread from './features/personalArea/community/NewThread.js';
import Thread from './features/personalArea/community/Thread.js';
import HomePage from './features/main/HomePage.js';
import ForumBox from './features/personalArea/community/ForumBox.js';

const App = () => {

  return (
    <div className="App" dir="rtl">
      <CacheProvider value={cacheRtl}>

        <ThemeProvider theme={theme}>
          <Router>
            <Routes>

              <Route path='personal-area' element={<LayoutPersonalArea />} >
                <Route index element={""} />
                <Route path='edit' element={<h1>edit personal detile page</h1>} />
                <Route path='courses' element={<h1>courses page</h1>} />
                <Route path='tutorials' element={<h1>tutorials page</h1>} />
                <Route path='community' element={<Forums />} />
                <Route path='community/:id' element={<Treads />} />
                <Route path='community/:id/new-thread' element={<NewThread />} />
                <Route path='community/:id/:threadId' element={<Thread />} />
                
                <Route path='zoom' element={<h1>zoom page</h1>} />
                <Route path='*' element={<h1>404 not found</h1>} />

              </Route>
              <Route path="/" element={<Layout />}>
                
                <Route index element={<HomePage />} />
                <Route path="about" element={<h1>about page</h1>} />
                <Route path="courses" element={<h1>courses page</h1>} />
                <Route path="tutorials" element={<h1>tutorials page</h1>} />
                <Route path="community" element={<h1>community page</h1>} />
                <Route path="contact" element={<h1>contact page</h1>} />
                <Route path="login" element={<Login />} />
                <Route path='signup' element={<h1>signup page</h1>} />
                <Route path='forum' element={<ForumBox />} />
                <Route path="*" element={<h1>404 not found</h1>} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </CacheProvider>

    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import Layout from './Components/site/Layout';
import theme, { cacheRtl } from './theme';
import Login from './features/auth/login/Login';
import LayoutPersonalArea from './Components/personalArea/Layout/Layout';
import Forums from './Components/personalArea/community/forums/forums';
import Treads from './Components/personalArea/community/threads/Threads';
import NewThread from './Components/personalArea/community/NewThread/NewThread';
import Thread from './Components/personalArea/community/Thread';
import HomePage from './Components/site/HomePage/HomePage';
// import HomePage2 from '/Components/personalArea/community/HomePage/HomePage2.js'
import DashLayout from './Components/dash/Layout/DashLayout';
import ForumsList from './features/forums/list/ForumsList';
import AddForum from './features/forums/add/AddForum';
import EditForum from './features/forums/view/EditForum';
import ThreadsList from './features/threads/list/threadsList';
import UsersList from './features/users/list/UsersList';
import ThreadPage from './Components/personalArea/community/threadPage/ThreadPage';





function App() {
  return (
    <div className="App" dir="rtl">
      <CacheProvider value={cacheRtl}>

        <ThemeProvider theme={theme}>
          <Router>
            <Routes>

              <Route path="personal-area" element={<LayoutPersonalArea />}>
                <Route index element="" />
                <Route path="edit" element={<h1>edit personal detile page</h1>} />
                <Route path="courses" element={<h1>courses page</h1>} />
                <Route path="tutorials" element={<h1>tutorials page</h1>} />
                <Route path="community" element={<Forums />} />
                <Route path="community/:id" element={<Treads />} />
                <Route path="community/:forumId/:threadId" element={<ThreadPage />} />
                
                <Route path="community/:id/new-thread" element={<NewThread />} />
                <Route path="community/:id/:threadId" element={<Thread />} />

                <Route path="zoom" element={<h1>zoom page</h1>} />
                <Route path="*" element={<h1>404 not found</h1>} />

              </Route>

              <Route path="/" element={<Layout />}>

                <Route index element={<HomePage />} />
                <Route path="about" element={<h1>about page</h1>} />
                <Route path="courses" element={<h1>courses page</h1>} />
                <Route path="tutorials" element={<h1>tutorials page</h1>} />
                <Route path="community" element={<h1>community page</h1>} />
                <Route path="contact" element={<h1>contact page</h1>} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<h1>signup page</h1>} />
                <Route path="*" element={<h1>404 not found</h1>} />
              </Route>
              <Route path="dash" element={<DashLayout />}>
                <Route index element="" />
                <Route path="forums" element={<Outlet />}>
                  <Route index element={<ForumsList />} />
                  <Route path="add" element={<AddForum />} />
                  <Route path=":id/edit" element={<EditForum />} />
                  <Route path=":id/threads" element={<ThreadsList />} />

                </Route>
                <Route path="threads" element={<ThreadsList />} />
                <Route path="users" element={<Outlet />}>
                  <Route index element={<UsersList />} />
                  <Route path="add" element={<h1>add user</h1>} />
                  <Route path=":id/edit" element={<h1>edit user</h1>} />
                </Route>

                <Route path="*" element={<h1>404 not found dashboard</h1>} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </CacheProvider>

    </div>
  );
}

export default App;

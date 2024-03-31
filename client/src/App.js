import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Layout from "./Components/site/Layout.js";
import theme from './theme';
import { ThemeProvider } from "@mui/material/styles"
import Login from './features/auth/login/Login.js';
import { CacheProvider } from '@emotion/react';
import { cacheRtl } from './theme';
import LayoutPersonalArea from './Components/personalArea/Layout.js';
import Forums from './Components/personalArea/community/forums.js';
import Treads from './Components/personalArea/community/Treads.js';
import NewThread from './Components/personalArea/community/NewThread.js';
import Thread from './Components/personalArea/community/Thread.js';
import HomePage from './Components/site/HomePage.js';
import ForumBox from './Components/personalArea/community/ForumBox.js';
import DashLayout from './Components/dash/Layout/DashLayout.js';
import ForumsList from './features/forums/list/ForumsList.js';
import AddForum from './features/forums/add/AddForum.js';
import EditForum from './features/forums/view/EditForum.js';
import ThreadsList from './features/threads/list/threadsList.js';
import UsersList from './features/users/list/UsersList.js';


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
              <Route path='dash' element={<DashLayout />} >
                <Route index element={""} />
                <Route path='forums' element={<Outlet />} >
                  <Route index element={<ForumsList />} />
                  <Route path='add' element={<AddForum />} />
                  <Route path=':id/edit' element={<EditForum />} />
                  <Route path=':id/threads' element={<ThreadsList />} />

                </Route>
                <Route path='threads' element={<ThreadsList />} />
                <Route path='users' element={<Outlet />} >
                  <Route index element={<UsersList />} />
                  <Route path='add' element={<h1>add user</h1>} />
                  <Route path=':id/edit' element={<h1>edit user</h1>} />
                </Route>

                <Route path='*' element={<h1>404 not found dashboard</h1>} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </CacheProvider>

    </div>
  );
}

export default App;

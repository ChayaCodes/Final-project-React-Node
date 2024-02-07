import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./features/Layout"
import theme from './theme';
import {ThemeProvider} from "@mui/material/styles"
import Login from './features/Login';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<h1>home page</h1>}/>
            <Route path="about" element={<h1>about page</h1>}/>
            <Route path="courses" element={<h1>courses page</h1>}/>
            <Route path="tutorials" element={<h1>tutorials page</h1>}/>
            <Route path="community" element={<h1>community page</h1>}/>
            <Route path="contact" element={<h1>contact page</h1>}/>
            <Route path="login" element={<Login/>}/>
            <Route path='signup' element={<h1>signup page</h1>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
          </Route>
        </Routes>
      </Router>
      </ThemeProvider>
      
    </div>
  );
}

export default App;

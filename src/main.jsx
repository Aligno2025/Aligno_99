import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/AuthContext.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Main_task from './components/Task_management/Main_task.jsx'
import Main_team from './components/Team_collaboration/Main_team.jsx'
import Main_support from './components/Support/Main_support.jsx'
import Error from './components/Error.jsx';
import Sign_in from './components/Sign_up/Sign_in.jsx';
import Test from './components/Test.jsx';
import MainDash from './components/MainDash.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode >
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Main_task" element={<Main_task />} />
          <Route path="/Main_team" element={<Main_team />} />
          <Route path="/Main_support" element={<Main_support />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="*" element={<Error />} />
          <Route path="Test" element={<Test />} />
          <Route path="MainDash" element={<MainDash />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
)

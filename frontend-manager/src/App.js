import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignupForm from './components/signupForm/signupForm';
import LoginForm from './components/loginForm/loginForm';
import Sidebar from './components/sidebar/Sidebar';
import Admin from './pages/admin/Admin';
import Auth from './pages/Auth/Auth';
import CreateStore from './pages/createStore/CreateStore';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className='App'>
      <Sidebar />
      <div className='content'>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/' element={<Admin user={user} />} />
            <Route path='/createstore' element={<CreateStore />} />
          </Route>
          <Route path='/auth' element={<Auth setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

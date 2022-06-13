import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dasboard/Dashboard';
import Auth from './pages/Auth/Auth';
import CreateStore from './pages/createStore/CreateStore';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className='App'>
      <Sidebar user={user} />
      <div className='content'>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/' element={<Dashboard user={user} />} />
            <Route path='/createstore' element={<CreateStore />} />
          </Route>
          <Route path='/auth' element={<Auth setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

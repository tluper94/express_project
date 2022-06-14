import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dasboard/Dashboard';
import Auth from './pages/Auth/Auth';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Stores from './pages/stores/Stores';
import Products from './pages/products/Products';
import Categories from './pages/categories/Categories';
import Settings from './pages/settings/Settings';
import Employees from './pages/employees/Employees';
import Finance from './pages/Finance/Finance';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    token && setUser(token);
  }, []);

  return (
    <div className='App'>
      <Sidebar user={user} />
      <div className='content'>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/' element={<Dashboard user={user} />} />
            <Route path='/stores' element={<Stores user={user} />} />
            <Route path='/products' element={<Products user={user} />} />
            <Route path='/categories' element={<Categories user={user} />} />
            <Route path='/employees' element={<Employees user={user} />} />
            <Route path='/finance' element={<Finance user={user} />} />
            <Route path='/settings' element={<Settings user={user} />} />
          </Route>
          <Route
            path='/auth'
            element={<Auth user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

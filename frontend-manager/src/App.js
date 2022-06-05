import { useState } from 'react';

import './App.css';
import SignupForm from './components/signupForm/signupForm';
import LoginForm from './components/loginForm/loginForm';
import Sidebar from './components/sidebar/Sidebar';
import Admin from './pages/admin/Admin';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className='App'>
      <Sidebar />
      <div className='content'>
        {user ? (
          <Admin />
        ) : (
          <div className='auth'>
            <SignupForm setUser={setUser} />
            <LoginForm setUser={setUser} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

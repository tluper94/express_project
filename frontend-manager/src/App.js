import './App.css';
import SignupForm from './components/signupForm/signupForm';
import LoginForm from './components/loginForm/loginForm';

function App() {
  return (
    <div className='App'>
      <div className='auth'>
        <SignupForm />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

// components import here!
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId='544213842866-lp1s70c58he6agigll26trt37mp8ffio.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;

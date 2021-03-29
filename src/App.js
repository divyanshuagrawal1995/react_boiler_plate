import './App.css';
import Routing from './Routes/routes';
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <Router >
      <AuthProvider>
      <Routing />
      </AuthProvider>
    </Router>
  );
}

export default App;

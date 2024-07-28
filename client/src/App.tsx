import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';

function App() {

  return (
    <Router>
      <div className="app-container">
        {/* <div className="navbar">
          <Link to="/"> Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div> */}
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App

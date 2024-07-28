import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'

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
          <Route path="/" element={<h1>Dashboard </h1>}/>
          <Route path="/auth" element={<h1>Sign In </h1>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App

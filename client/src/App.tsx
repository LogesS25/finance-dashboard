import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { FinancialRecordsProvider } from './context/financial-record-context';
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <Router>
      <div className="app-container">
         <div className="navbar">
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div> 
        <Routes>          
          <Route path="/dashboard" element={
            <FinancialRecordsProvider>
                <Dashboard/>
            </FinancialRecordsProvider>}/>
            <Route path="/" element={<Auth/>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App

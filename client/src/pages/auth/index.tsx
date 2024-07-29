import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
  } from "@clerk/clerk-react";
  import { Navigate } from "react-router-dom";
  
  export const Auth = () => {
    return (
      <div className="sign-in-container">
        <SignedOut>
         <Navigate to="/" />  
        <h1> Welcome to NodeJS Dashboard</h1>
          <SignUpButton mode="modal" />
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Navigate to="/dashboard" />  
        </SignedIn>
      </div>
    );
  };
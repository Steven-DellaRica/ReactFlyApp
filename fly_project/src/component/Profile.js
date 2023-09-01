import React, { useContext } from 'react';
import { FetchContext } from "./FetchUser";
import Login from './Login';
import { Link } from 'react-router-dom';


export default function Profile() {

  const {loggedInUser, handleLogout } = useContext(FetchContext);

return (
  <>
  {loggedInUser ? (
      <>
        <h1>Bienvenue, {loggedInUser} !</h1>
        <Link to="/">Retour</Link>
        <Link to="/"><button onClick={handleLogout}>Déconnexion</button></Link>
        
        
          {/* username={loggedInUser}
          onUpdatePreferences={(updatedUser) => {
            localStorage.setItem(`user-${loggedInUser}`, JSON.stringify(updatedUser));
          }} */}
        
      </>
    ) : (
      <Login />
    )}
    </>
)
}
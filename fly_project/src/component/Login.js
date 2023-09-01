import React, { useContext, useEffect, useState } from "react";
import { FetchContext } from "./FetchUser";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    data,
    checkLogin,
    saveLogin,
    handleLogin,
    loggedInUser,
    handleLogout,
  } = useContext(FetchContext);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleEncoreplusLogin = (e) => {
    e.preventDefault();
    console.log(e);
    // console.log('ca c username');
    // console.log(username);
    const user = checkLogin(e.target.username.value, e.target.pass.value);
    // console.log('ça cest user');
    // console.log(user);
    if (user) {
      saveLogin(username, password);
      handleLogin(username);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect.");
    }

    // window.location.href = `/profile/${username}`;
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <p>Bravo t'es co enculé</p>
          <Link to={`/profile/:${username}`}> Profil de l'enculé</Link>
        </div>
      ) : (
        <>
          <h2>Connexion</h2>
          <form onSubmit={handleEncoreplusLogin}>
            <input
              type="text"
              id="username"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              list="usernames"
            />
            <datalist id="usernames">
              {data.map((user, index) => (
                <option key={index} value={user.username} />
              ))}
            </datalist>
            <input
              type="password"
              id="pass"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Se connecter</button>
          </form>
        </>
      )}
    </div>
  );
}

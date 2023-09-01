import React, { createContext, useState, useEffect } from 'react';

export const FetchContext = createContext();

export function FetchProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://fakestoreapi.com/users?limit=5');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedData = await response.json();
      console.log(fetchedData)
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };


  const checkLogin = (username, password) => {
    const user = data.find((userData) => userData.username === username && userData.password === password);
    return user;
  };

  const saveLogin = (username, password) => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const datas = {
    data,
    loading,
    error,
    loggedInUser,
    fetchData,
    checkLogin,
    saveLogin,
    handleLogin,
    handleLogout
  }

  return (
    <FetchContext.Provider value={datas}>
      {children}
    </FetchContext.Provider>
  );
}

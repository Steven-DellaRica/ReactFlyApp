import React, { useContext, useEffect } from 'react';
import useLocalStorage from './Uselocalstorage';
import { FetchContext } from './FetchUser';

export default function Personnes() {
  const { data, loading, error, fetchData } = useContext(FetchContext);

  const [datas, setDatas] = useLocalStorage('userDatas', []);

  useEffect(() => {
    fetchData(); 
  }, []); 

  console.log(datas);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          {datas.map((data, index) => (
            <div key={index}>
              UserName: {data.username}
              Name: {data.name.firstname}, {data.name.lastname}
              Phone: {data.phone}
              Email: {data.email}
              Adresse: {data.address.city}, {data.address.street}, {data.address.number}, {data.address.zipcode}
              ID: {data.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

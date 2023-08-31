import React, { useEffect } from 'react';
import useLocalStorage from './Uselocalstorage';

export default function Personnes() {
    const [datas, setDatas] = useLocalStorage('userDatas', []);

    useEffect(() => {
        fetchdata();
    }, []); 

    const fetchdata = () => {
        fetch('https://fakestoreapi.com/users?limit=5')
            .then((response) => response.json())
            .then((data) => setDatas(data));
    };

    console.log(datas);


    return (
        <div>
            {datas.map((data, index) => (
                <div key={index}>
                     UserName:{data.username}
                     Name: {data.name.firstname}, {data.name.lastname}, {data.phone}
                     Email:{data.email}
                     {data.password}
                     Adresse:{data.address.city}, {data.address.street}, {data.address.number}, {data.address.zipcode}
                     ID:{data.id}
                    
                </div>
            ))}
        </div>
    );
}

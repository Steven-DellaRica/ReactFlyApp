import React, { useEffect, useState } from 'react';

export default function Personnes() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []); 

    const fetchdata = () => {
        fetch('https://fakestoreapi.com/users?limit=5')
            .then((response) => response.json())
            .then((data) => setDatas(data));
    };

    console.log(datas);

    useEffect(() => {
        localStorage.setItem();
    }, [datas]);

    return (
        <div>
            {datas.map((data, index) => (
                <div key={index}>
                     {data.username}
                     {data.email}
                     {data.password}
                    
                </div>
            ))}
        </div>
    );
}

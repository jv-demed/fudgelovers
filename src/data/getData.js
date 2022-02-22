import { useState, useEffect } from 'react';

export default function getData(prop, query){
    
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': '4c69d38a00325d8adab8de1a566818',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'query': `query{${query}}`})
        })
        .then((res) => res.json())
        .then((complete) => {
            setData(complete.data[prop]);
        })
    
    }, []);

    return data;
}
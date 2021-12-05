import React, { useEffect, useState } from "react";
import axios from "axios";
function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data));
    }, []);
    console.log(data);
    return (
        <div className="App">
            {data.map((data, index) => {
                return (
                    <>
                        <h1 id="App1">name: {data.name}</h1>

                        <h1 id="App2">username: {data.username}</h1>
                    </>
                );
            })}
        </div>
    );
}

export default UserList;

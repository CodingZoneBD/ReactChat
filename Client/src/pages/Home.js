import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")


    return (
        <div className="join">
            <div className="join-form">
                <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
                <Link to={`/chat?name=${name}&room=${room}`}>Join</Link>
            </div>
        </div>
    );
};

export default Home;
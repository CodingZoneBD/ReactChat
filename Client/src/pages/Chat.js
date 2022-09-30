import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string"
import io from 'socket.io-client'
let socket;

const Chat = () => {
    const { search } = useLocation();
    const { name, room } = queryString.parse(search)

    useEffect(() => {
        // socket = io("http://localhost:4000/")
    }, [])


    return <h1>Chat</h1>;
};

export default Chat;
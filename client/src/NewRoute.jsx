import { useEffect, useRef, useState } from "react";

const NewRoute = () => {
    const socketRef = useRef(null);//prevents trigger on re-render
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socketRef.current = new WebSocket("ws://localhost:4000");//creating the connection

        socketRef.current.onopen = () => {//connection established with the websocket server
            console.log("Connected to WebSocket server");
        };

        socketRef.current.onmessage = (event) => {//message sent by the server
            setMessages((prev) => [...prev, event.data]);
        };

        socketRef.current.onclose = () => {//server disconnected
            console.log("Disconnected from server");
        };

        return () => {
            socketRef.current.close();
        };
    }, [])

    const sendMessage = () => {//we are sending to the server
        if (socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(message);//sending the message to the server
            setMessage("");
        }
    };

    return (
        <>
        <div style={{ padding: "20px", color: "white", display:"flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', height:'100vh', gap: "3vw"}}>
            <h1>Hello to Websocket</h1>
            <h2>WebSocket React Client</h2>

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message"
            />

            <button onClick={sendMessage}>Send</button>

            <ul>
                {messages.map((msg, i) => (
                    <li key={i}>{msg}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default NewRoute
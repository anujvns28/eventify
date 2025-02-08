import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Connect to backend socket server
const socket = io("https://eventserver-g3cn.onrender.com", {
  reconnection: true,
});

const useSocketConnection = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server:", socket.id);
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return { socket, isConnected };
};

export default useSocketConnection;

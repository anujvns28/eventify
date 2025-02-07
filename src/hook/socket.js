import { useEffect } from "react";
import { io } from "socket.io-client";

// Create socket instance
const socket = io("http://localhost:5000", {
  autoConnect: false, 
  reconnection: true,
});

const useSocketConnection = () => {
  

  useEffect(() => {
      // Listen for socket connection event
      socket.on("connect", () => {
        console.log("Socket connected:", socket.id); 
      });

      if (!socket.connected) {
        socket.connect(); 
      }

      // Cleanup on unmount or user change
      return () => {
        if (socket.connected) {
          console.log("Disconnecting socket...");
          socket.disconnect(); // Disconnect when the component unmounts
        }
      };
    
  }, []);

  return socket;
};

export default useSocketConnection;

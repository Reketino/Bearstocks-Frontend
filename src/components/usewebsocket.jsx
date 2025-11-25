import {  useEffect, useRef, useState } from 'react'

export default function useWebSocket(url, opts = {}) {
const { autoReconnect = true, reconnectInterval = 3000} = opts;
const wsRef= useRef (null);
const [connected, setConnected] = useState(false);
const [lastMsg, setLastMsg] = useState(null);


useEffect(() => { 
   let shouldReconnect = autoReconnect;
   let mounted = true;
   let reconnectTimer = null;
   
   
   function connect() {
    wsRef.current = new WebSocket(url);


    wsRef.current.onopen = () => {
        if (!mounted) return;
        setConnected(true);
    };


    wsRef.current.onmessage = (ev) => {
        if (!mounted) return;
        setLastMsg(ev.data);
    };


    wsRef.current.onclose = () => {
        if (!mounted) return;
        setConnected(false);
        if (shouldReconnect) {
          reconnectTimer = setTimeout(connect, reconnectInterval);  
        }
    };


    wsRef.current.onerror = () => {
        wsRef.current.close();
    };
   }


connect();


return () => {
    mounted = false;
    shouldReconnect = false;
    clearTimeout(reconnectTimer);
    try { wsRef.current.close(); } catch {}
};
}, [url]);

return {
    connected,
    lastMsg, 
    send: (payload) => {
        try {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify(payload));
                return true;
            }
            return false;
        } catch {
            return false;
        }
    },
  };
}

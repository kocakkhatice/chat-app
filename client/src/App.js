import './App.css';
import {io} from 'socket.io-client';
import {useEffect, useState} from 'react';
import TimeAgo from 'react-timeago'
function App() {
  const[logs, setLogs] = useState([]);
  
  useEffect(()=> {
    const socket = io("http://localhost:3000", {transports: ["websocket"]});
    socket.on('welcome', () => console.log("welcome"))

    socket.on('new-user', ({title, joinDate}) => {
      console.log(joinDate)
       setLogs((p) => [...p, {title, joinDate}])
    })
  },[]);
  return (
    <div className="App">
     
       
      {
        logs.map((item, key) =>
            <div key = {key}> 
                  {item.title} - <TimeAgo date= {item.joinDate}/>
              </div>
          
          )
      }
     
    </div>
  );
}

export default App;

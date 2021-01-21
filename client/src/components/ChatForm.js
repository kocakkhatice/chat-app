import React , {useState, useContext} from 'react'
import styles from './styles.module.css';
import {sendMessage} from '../socketservice';
import ChatContext from '../contexts/ChatContext';
function ChatForm() {
    const[message, setMessage] = useState("");
    const {messages, setMessages} = useContext(ChatContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessages([...messages, {message}]);
        setMessage("");
     }
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className={styles.textInput} 
                    placeholder="Type a message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}/>
            </form>

       </div>
    )
}

export default ChatForm

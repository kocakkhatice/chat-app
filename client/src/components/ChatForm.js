import React from 'react'
import styles from './styles.module.css';
function ChatForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("hello");
    }
    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.textInput} placeholder="Type a message..."/>
            </form>

       </div>
    )
}

export default ChatForm

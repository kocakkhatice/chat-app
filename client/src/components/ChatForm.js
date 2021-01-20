import React from 'react'
import styles from './styles.module.css';
function ChatForm() {
    return (
        <div>
            <input className={styles.textInput} placeholder="Type a message..."/>
        </div>
    )
}

export default ChatForm

import {useContext} from 'react'
import styles from './styles.module.css';
import ChatContext from '../contexts/ChatContext';
import ChatItem from './ChatItem';
function ChatList() {
    const {messages} = useContext(ChatContext);
    return (
        <div className={styles.chatList}>
            {
                messages.map(
                    (item, key) => 
                        <ChatItem key={key} item = {item} />
                       
                )
            
            }
        </div>
    )
}

export default ChatList

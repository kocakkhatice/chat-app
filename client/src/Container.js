import React, {useEffect, useContext} from 'react'
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';
import { initSocket, subscribeToChat} from './socketservice';
import ChatContext from './contexts/ChatContext';
function Container (){
    const {setMessages} = useContext(ChatContext);
    useEffect(() => {
        initSocket();
        subscribeToChat((message) => {
            setMessages((oldChats) =>  [...oldChats,{message}])
        });


    }, [])
    return (
        <div style={{width: "60%", margin:"0 auto"}}>
            <ChatList/>
            <ChatForm/>
        </div>

    )
}
export default Container
import React, {useEffect} from 'react'
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';
import { initSocket } from './socketservice';
 
function Container (){
    useEffect(() => {
        initSocket();
    }, [])
    return (
        <div style={{width: "60%", margin:"0 auto"}}>
            <ChatList/>
            <ChatForm/>
        </div>

    )
}
export default Container
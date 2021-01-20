import React from 'react'
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';
function Container (){
    return (
        <div style={{width: "60%", margin:"0 auto"}}>
            <ChatList/>
            <ChatForm/>
        </div>

    )
}
export default Container
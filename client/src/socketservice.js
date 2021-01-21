import io from 'socket.io-client';
let socket;
export const initSocket = () => {
    socket = io("http://localhost:3000", {
        transports: ['websocket'], //transport yoksa polling yapabilirsin
    });
    console.log('Connecting...');
    socket.on('connect', () => console.log('Connected'));
}
export const sendMessage = (message) => {
    if (socket) socket.emit('new-message', message)
}
export const subscribeToChat = (cb) => {
    if(!socket) return true;
    socket.on('receive-message', (message) => {
        console.log("message received: "+ message)
        cb(message)
        
    }
    )

}
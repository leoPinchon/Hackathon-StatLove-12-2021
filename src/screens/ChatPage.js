import Chat from '../components/Chat'

import '../styles/ChatPage.css'

const ChatPage = ({msg,setMsg}) => {
    return (
    <div className="chatHolder2">
        <Chat msg={msg} setMsg={setMsg}/>
    </div>        
    )
}

export default ChatPage
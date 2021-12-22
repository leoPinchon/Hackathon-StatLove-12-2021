import '../styles/Messages.css'

const ChatMessages = ({msg}) => {

    console.log(msg);

    return (
        <div>
            <div className="msg">{msg}</div>
        </div>
    )
}

export default ChatMessages
import '../styles/Messages.css'

const ChatMessages = ({msg}) => {

    console.log(msg);

    return (
        <div>
            <div className={"msg"}>
                <div>{msg}</div>
            </div>
        </div>
    )
}

export default ChatMessages
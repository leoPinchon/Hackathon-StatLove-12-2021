import ChatBot from "./ChatBot"
import { useState } from "react"
import { Link, Outlet } from 'react-router-dom'

const ChatInput = () => {

    const [inputContent, setInputContent] = useState('')

    return (
        <div>
            <input value={inputContent} placeholder="Say hello" onChange={(e) => setInputContent(e.target.value)}></input>
            <ChatBot input={inputContent} />
        </div>
    )
} 
export default ChatInput
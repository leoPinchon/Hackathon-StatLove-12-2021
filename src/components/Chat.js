import { triggers } from '../datas/triggers'
import { robotAnswers } from '../datas/robotAnswers'
import { useState } from 'react'
import '../styles/ChatPage.css'
import ChatMessages from './ChatMessages'

const ChatTest = () => {
    
    
    const [msg, setMsg] = useState([]) 
    const [inputContent, setInputContent] = useState('') 
    
    const response = (triggersArray, robotAnswersArray, text ) => {        
        let item;
        for (let x = 0; x < triggersArray.length; x++) {
            for (let y = 0; y < robotAnswersArray.length; y++) {
                if (triggersArray[x][y] === text) {
                    let items = robotAnswersArray[x];
                    item = items[Math.floor(Math.random() * items.length)];
                }
            }
        }
        return item       
    }
    
    const addMsg = () => {        
        const newMsgArr = [...msg]        
        newMsgArr.push(inputContent)
        let res = response(triggers, robotAnswers, inputContent)
        newMsgArr.push(res)
        setMsg(newMsgArr)
        setInputContent("")
    }

    return (
    <div className="chatHolder">  
    {console.log('test', msg)}      
        <ul className="messagesHolder">
            {msg.map((data, index) => (
                
                <ChatMessages
                    key={index}
                    msg={data}
                />
            ))}
        </ul>
        <input 
            value={inputContent} 
            placeholder="Say hello" 
            onChange={(e) => setInputContent(e.target.value)}>                
        </input>
        <button 
            className="validationBtn" 
            onClick={() => addMsg(inputContent)}>
            Enter
        </button>
    </div>        
    )
}

export default ChatTest
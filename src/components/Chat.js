import { triggers } from '../datas/triggers'
import { robotAnswers } from '../datas/robotAnswers'
import { useState } from 'react'
import '../styles/ChatPage.css'
import ChatMessages from './ChatMessages'
import Cards from './Cards'

const ChatTest = ({msg, setMsg}) => {
  
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
        <ul className="messagesHolder">
            {msg.map((data, index) => {
                
                return (
                    <ChatMessages
                    key={index}
                    index={index}
                    msg={data}
                />)
})}
        </ul>
        <div className="ChatMessageInput">
                <input 
                    value={inputContent} 
                    placeholder="Say hello" 
                    onChange={(e) => setInputContent(e.target.value)}>     
                </input>
            
            <button 
                className="filter-button" 
                onClick={() => addMsg(inputContent)}>
                    <div className="iAlign">
                <i class="fas fa-paperclip"></i>
                <i class="far fa-smile-beam"></i>
                <i className="far fa-paper-plane validationBtn" ></i>
                </div>
                
            </button>
        </div>
        
    </div>        
    )
}

export default ChatTest
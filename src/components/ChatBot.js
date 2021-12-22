    import { useState } from "react";
    import { triggers } from "../datas/triggers";
    import { robotAnswers } from "../datas/robotAnswers";

    const ChatBot = ({input}) => {

      const [messages, setMessages] = useState([])
  
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
        return setMessages(item)
        
      }
      // console.log('Coucou');
      return (

        <div>
            <div>réponse automatisée</div>
            <button onClick={() => response(triggers, robotAnswers, input)}>PRESS</button>
            <button onClick={() => console.log(messages)}>CONFIRM</button>
        </div>

      )
    }
    
    export default ChatBot;

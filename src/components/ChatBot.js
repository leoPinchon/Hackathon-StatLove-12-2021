    import "./Form.css";
    import Item from "./Item";
    import { useState } from "react";
    import { v4 as uuidv4 } from "uuid";

    const ChatBot = () => {
      const [dataArr, setDataArr] = useState([
        { txt: "Promener le chien", id: uuidv4() },
        { txt: "Faire les courses", id: uuidv4() },
        { txt: "Coder avec React", id: uuidv4() },
      ]);
    
      const [stateInput, setStateInput] = useState();
    
     
    
      // const deleteElement = (id) => {
      //   const filteresState = dataArr.filter((item) => item.id !== id);
      //   setDataArr(filteresState);
      // };
    
    
      const addTodo = e =>{
        e.preventDefault()
        const newArr = [...dataArr]
    
        const newTodo ={}
        newTodo.txt=stateInput
        newTodo.id= uuidv4()
    
        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput('')
      }
      const linkedInput = e => {
        // console.log(e)
        setStateInput(e)
      }
    
     
    
      return (
        <div>
          <section className="todo">
            <h1>Todo-List</h1>
            <form onSubmit={e => addTodo(e)} className="form">
              <label htmlFor="todo">Chose à faire</label>
              <input value={stateInput}
              onInput={e=> linkedInput(e.target.value)}
              type="text" id="todo" />
              <button className="btn-add">Ajouter</button>
            </form>
    
            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
              {dataArr.map((data) => (
                <Item
                  key={data.id}
                  id={data.id}
                  txt={data.txt}
                  // delFunc={deleteElement}
    
                />
              ))}
            </ul>
          </section>
        </div>
      );
    };
    
    export default ChatBot;
}
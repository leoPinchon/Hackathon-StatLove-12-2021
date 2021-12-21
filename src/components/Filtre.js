import 

const Filtre = (props) => {
    
    const [characters, setCharacters] = useState([])

    return (
        <div>
            <select name={props.genre}>
                <option value="">{props.genre}</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    )
}
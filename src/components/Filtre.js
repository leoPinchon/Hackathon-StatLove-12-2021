import { useState, useEffect } from 'react'

const Filtre = ({select, nameDisplay,}) => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getData = () => {
            fetch(`https://miadil.github.io/starwars-api/api/all.json`)
            .then((res) => res.json())
            .then((res) => setCharacters(res));
        }
        getData()
    }, [])
    
        let selectedFilter = characters.reduce((acc, character) =>
        acc.includes(character[select]) ? acc : acc.concat(character[select]),
        [])
    
    return (
        <div>
            <select name={select}>
                <option value="">{nameDisplay}...</option>
                {selectedFilter.map((data) => {
                return <option value={data}>{data}</option>
                })}             
            </select>
        </div>
    )
}

export default Filtre
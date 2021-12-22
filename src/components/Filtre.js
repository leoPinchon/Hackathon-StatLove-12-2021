import { useState, useEffect } from 'react'
import Cards from './Cards'

const Filtre = ({select, setCharactersTabFiltered}) => {

    const [characters, setCharacters] = useState([])
    
    const [valueFiltered, setValuefiltered] = useState('')
    

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
    
        // filtrer le tableau
        const dataValueFunc = (e) => setValuefiltered(e.target.value)
        

        const tabCharactersFiltered = characters.filter(character => character[select]===valueFiltered )
        useEffect(() =>
        console.log('filtre')||
        setCharactersTabFiltered(tabCharactersFiltered),[valueFiltered]
        )
        

    return (
        <div>
            <select name={select} value={valueFiltered} onChange={dataValueFunc}>
                <option value="">{select}...</option>
                {selectedFilter.map((data) => {
                return <option value={data}>{data}</option>
                })}             
            </select>
        </div>
    )
}

export default Filtre
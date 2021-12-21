import Filtre from "../components/Filtre"

const Filters = () => {

    return (
        <div>
            <h2>Choisissez vos filtres :</h2>
            <Filtre select="gender" />
            <Filtre select="species" />
            <Filtre select="height" />
            <Filtre select="mass" />
        </div>
    )
}

export default Filters
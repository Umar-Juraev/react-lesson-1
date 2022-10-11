

const PlanetCard = ({data})=>{

    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.describtion}</p>
        </div>
    )
}

export default PlanetCard
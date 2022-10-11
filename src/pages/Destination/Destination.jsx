import PlanetCard from "../../components/PlanetCard/PlanetCard"
import './Destination.scss'

function Destination({ data }) {


    return (
        <main className="destination">
            {data.map((item)=>(
            <PlanetCard data={item}  />
           ))}
        </main>
    )
}

export default Destination
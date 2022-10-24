import {useEffect, useState} from 'react';
import StarShip from '../components/StarShip';

function Swapi() {
    
    let [starShip, setStarship] = useState([])

    const getAllStarShips = async () => {
        const response = await fetch(`https://swapi.dev/api/starships/`)
        const data = await response.json()
        setStarship(data.results)
        //console.log(data)
    }

useEffect(() => {
    getAllStarShips()
},[])

    return(
        <div className='swapi'>
            {starShip.map((s, index) => {
                return(
                    <StarShip key={index} starShip={s} />
                )
                
            })}
            
        </div>
    )

    
}

export default Swapi;
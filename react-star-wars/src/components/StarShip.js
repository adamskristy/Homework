import StarShipInfo from "./StarShipInfo";

function StarShip({ starShip }) {

   

    return ( 
        <div className="starship">
            <h2>{starShip.name}</h2>
            <StarShipInfo />
        </div>
     );
}

export default StarShip;
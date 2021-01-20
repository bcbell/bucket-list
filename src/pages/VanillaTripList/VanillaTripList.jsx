import React, { useState, useEffect }  from 'react'
import * as tripAPI from '../../services/trip-api'
import VanillaTripShowCard from '../../components/VanillaTripShowCard/VanillaTripShowCard'
// import user from '../../../models/user'

const VanillaTripList = (props) => {
  console.log(props)
    
    const [trips, setTrips]= useState([])

    async function handleDeleteTrip(id) {
      await tripAPI.deleteTrip(id)
      setTrips(trips.filter(trip => trip._id !== id))
    }

    useEffect(() => {
        (async function(){
          const trips = await tripAPI.getAll();
          setTrips(trips);
        })();
      }, [])


    return ( 

<> 
      
      <div >
          {trips.map(trip =>
          <VanillaTripShowCard 
            key={trip._id}
            trip={trip}
            user={props.user}
            handleDeleteTrip={handleDeleteTrip}
          />
          )}
      </div>
    </>

     );
}
 
export default VanillaTripList;
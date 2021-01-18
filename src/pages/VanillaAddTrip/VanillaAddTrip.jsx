import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import '../VanillaAddTrip/VanillaAddTrip.css'
import * as tripAPI from '../../services/trip-api'


function VanillaAddTrip(props) {
  const history = useHistory()
  const [invalidForm, setValidForm] = useState(true)
  const formRef = useRef()

  const [state, handleChange] = useForm({
      startDate: '',
      endDate: '',
      tripName: '',
      departing: '',
      arriving: '',
      city: '',
      country: '',
    })

    async function handleAddTrip(newTripData) {
        await tripAPI.create(newTripData)
        history.push('/vanillatrip')
    }

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state])

    async function handleSubmit(e) {
        e.preventDefault()
        handleAddTrip(state)
    }

    return (
        <>
          <div className="AddTrip">
            <form className="col s12" ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="tripName" id="tripName" type="text" className="active" value={state.tripName} onChange={handleChange}/>
                    <label htmlFor="tripName">Trip Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="startDate" id="startDate" type="date" value={state.startDate} onChange={handleChange} required />
                    <label htmlFor="startDate">Start Date</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="endDate" id="endDate" type="date" value={state.endDate} onChange={handleChange} required/>
                    <label htmlFor="endDate">End Date</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="departing" id="departing" type="text" value={state.departing} onChange={handleChange}/>
                    <label htmlFor="departing">Departing from (ex. ORD)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="arriving" id="arriving" type="text"  value={state.arriving} onChange={handleChange}/>
                    <label htmlFor="arriving">Arriving at (ex. CDG)</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="city" id="city" type="text" value={state.city} onChange={handleChange}/>
                    <label htmlFor="city">City</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input name="country" id="country" type="text"  value={state.country} onChange={handleChange}/>
                    <label htmlFor="country">Country</label>
                  </div>
                </div>
                <button
                    type="submit"
                    disabled={invalidForm}
                >
                  
                  Add Trip
                </button>                           
            </form>
          </div>
        </>
      )
}

export default VanillaAddTrip;
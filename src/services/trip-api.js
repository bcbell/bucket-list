import tokenService from '../services/tokenService'


export function create(trip) {
    return fetch('/trips', {
          method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(trip)
    }, {mode: "cors"})
    .then(res => res.json());
  }

export function getAll(trips) {
    return fetch ('/trips', {
        mode: 'cors'
    }).then(res => res.json(trips))
}  

export function deleteTrip(id) {
    return fetch(`/trips/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: "cors"})
    .then(res => res.json())
    
}
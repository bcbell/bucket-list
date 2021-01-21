import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

export function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getUser(){
  return fetch(`${BASE_URL}updateprofile`, {
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
}, {mode: "cors"})
.then(res => res.json())
}

  export function show (id){
    return fetch(`${BASE_URL}${id}`, {
        method: "GET",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: "cors"})
    .then(res => res.json());
  }
export function edit(id){
    return fetch(`${BASE_URL}${id}/update`, {
        method: "GET",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify()
    }, {mode: "cors"})
    .then(res => res.json());
  }

 
export function create(id) {
  return fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(id)
  }, {mode: "cors"})
  .then(res => res.json());
}

  export function getFavorites(){
    return fetch(`${BASE_URL}/`, {
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
  }, {mode: "cors"})
  .then(res => res.json())
  }

export default{
  show,
  edit,
  create,
  getUser,
  getFavorites

}
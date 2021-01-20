import tokenService from "./tokenService";

export function getPOIfromBackend(formData) {
  return fetch(
    "/pickles/search",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(formData),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getDetailsFromBackend(POIid) {
  console.log(POIid);
  const body={POIid: POIid}
  console.log(JSON.stringify(body), 'line 21')
  return fetch(
    "/pickles/details",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // "Authorization": "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(body),
    },
    { mode: "cors" }
  )
    .then((res) => res.json())
}

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


export function getMessages() {
  return fetch(
    "/messageBoard",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // "Authorization": "Bearer " + tokenService.getToken(),
      },
    },
    { mode: "cors" }
  )
    .then((res) => res.json())
}

export function postMessage(formData){
    console.log(formData.content)
  return fetch(
    "/messageBoard",
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

export function getMessageDetails(id){
    return fetch(
      `/messageBoard/${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        //   Authorization: "Bearer " + tokenService.getToken(),
        },
        // body: JSON.stringify(),
      },
      { mode: "cors" }
    ).then((res) => res.json());
}

export function postReply(formData, id){
      console.log(formData.content);
      return fetch(
        `/messageBoard/${id}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // Authorization: "Bearer " + tokenService.getToken(),
          },
          body: JSON.stringify(formData),
        },
        { mode: "cors" }
      ).then((res) => res.json());
}
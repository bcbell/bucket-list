const axios=require('axios')

module.exports={
    searchPlaces,
    searchDetails
}

function searchPlaces(req, res){
    axios
      .get(
        `https://www.triposo.com/api/20201111/poi.json?location_id=${req.body.query}&account=${process.env.TRIPOSO_ACCOUNT_NUMBER}&token=${process.env.TRIPOSO_API_KEY}`
      )
      .then((response) => {
        res.json(response.data)
      });
}

function searchDetails(req, res){
    console.log(req.body.POIid,'HERE')
    axios.get(
      `https://www.triposo.com/api/20201111/poi.json?id=${req.body.POIid}&account=${process.env.TRIPOSO_ACCOUNT_NUMBER}&token=${process.env.TRIPOSO_API_KEY}`
    )
    .then((response) => {
        res.json(response.data)
    })
}

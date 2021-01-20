import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import { getPOIfromBackend } from "../../services/api-calls";
import POICard from '../../components/POICard/POICard'



class POISearch extends Component {
    state = { 
        POI: []
    }

     handlePOISearch = async (formData) => {
         const POI = await getPOIfromBackend(formData)
         this.setState({POI: POI.results})
    }

    render() { 
        return (
          <>
            <h3>Points of Interest Search</h3>
            <SearchForm handlePOISearch={this.handlePOISearch} />
            {this.state.POI.length ? 
              <>
                {this.state.POI.map((POI) => (
                  <POICard key={POI.id} POI={POI.name} snippet={POI.snippet} id={POI.id}/>
                ))}
              </>
             : (
              <h3>Add a city to search for Points of Interest</h3>
            )}
          </>
        );
    }
}
 
export default POISearch;
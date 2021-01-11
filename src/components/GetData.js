import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import ZipCard from './ZipCard'

function GetData(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${props.zip}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        items.map(item => (
          <ZipCard LocationText={item.LocationText}
          State={item.State}
          Lat={item.Lat}
          Long={item.Long}
          EstimatedPopulation={item.EstimatedPopulation}
          TotalWages={item.TotalWages}
          />
        ))
    );
  }
}

export default GetData;

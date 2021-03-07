import React from 'react';

function CityList({stays, setLocation}) {
//connects to API or local file
const cityItem = [...new Set(stays.map(item => item.location))]
  .map((city, index) => <li key={index} onClick={() => setLocation(city)}>{city}</li>)

return (
  <div className="filterItem">
    <ul className="cityList">
      {cityItem}
    </ul>
  </div>
  );
}

export default CityList;
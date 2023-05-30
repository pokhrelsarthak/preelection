import React from 'react';
import Homechart from './Homechart';
function Home() {
  return (
    <div>
      {/* <center>
      <h1>Welcome to Home</h1>
      <img src={karnataka} alt="Profile" style={{ maxWidth: "40%" }} />
      </ center> */}
      <div>
        <h2 style={{marginTop:'20px',textAlign:'center',fontWeight:'bold'}}>Party wise trends (224/224)</h2>
      </div>
      <center>
        <Homechart />
      </center>
    </div>
  );
}

export default Home;


import React from 'react';
import BarChart from './Components/BarChart';
import ScatterChart from './Components/ScatterChart';

const css = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: "#000",  
  padding: "10px",
  fontFamily: "Arial",
  margin: '3rem'
}

function App() {
  return <>
    <ScatterChart />
    <BarChart />
    <div className="desc" style={css}>
      <p>Name: Ashish Nath</p>
      <p>Email: ashishnath905@gmail.com</p>
      <p>Number: 8011743418</p>
    </div>
  </>
}

export default App;

import React from 'react';

import "./App.css"



import logo from "./assets/logo.png"

import { registerCharts } from "./registerCharts.ts"

import LineChart from "./graphs/LineChart.tsx"

import BarChart from "./graphs/BarChart.tsx"

import DoughnutChart from "./graphs/DoughnutChart.tsx"

import ScatterChart from "./graphs/ScatterChart.tsx"



registerCharts()



function App() {

  return (

    <div className="container">

      <img src={logo} alt="Gesem Fintech" />
      <h1>Financial Analysis Dashboard</h1>
    
      

      <div className="graph-container">

        <LineChart />

      </div>

      <div className="graph-container">

        <BarChart />

      </div>

      <div className="graph-container">

        <DoughnutChart />

      </div>

      <div className="graph-container">

        <ScatterChart />

      </div>

    </div>

  )

}



export default App
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import Style from './chart.module.scss'

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  return (
    <div className={Style.chart_div}>
        <div className="App">
            <div style={{ maxWidth: "650px" }}>
                <Bar
                    data={{
                        // Name of the variables on x-axies for each bar
                        labels: ["jan", "feb", "mar", "apr","may","june","july","aug","sep","oct","nov","dec"],
                        datasets: [
                            {
                                // Label for bars
                                label: "",
                                borderRadius:20,
                                // Data or value of your each variable
                                data: [1552, 1319, 613, 1400,200,500,80,900,150,250,700,1140],
                                // Color of each bar
                                backgroundColor: 
                                    ["#8FBFFF", "#8FBFFF", "#8FBFFF", "#8FBFFF"],
                                // Border color of each bar
                                borderColor: ["#8FBFFF", "#8FBFFF", "#8FBFFF", "#8FBFFF"],
                                borderWidth: 0.5,
                            },
                        ],

                    }}
                    // Height of graph
                    height={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x:{
                                grid:{
                                    display:false
                                }
                            },
                            y:{
                                grid:{
                                    display:false
                                },
                                beginAtZero:true
                            }
                        },
                        plugins:{
                            legend: {
                                display:false,
                                labels: {
                                    fontSize: 15,
                                },
                               
                            },
                            tooltip:{
                                enabled:true
                            }
                        }
                        
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Chart

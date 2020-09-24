import React, { useState, useEffect } from "react";
import { BarChart } from './BarChart';



export const ChartContainer = () => {
    const [drugs, setDrugs] = useState([]);
    const [chartdData, setChartData] = useState(null);

    const options = {
        title: {
            display: true,
            text: 'Drugs Count',
            fontSize: 20
        },
        legend: {
            display: true,
            position: 'right'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 0.5
                }
            }]
        },
        events: ['click'],
        onClick: (e, items) => {

        }
    };


    useEffect(() => {
        fetch(process.env.REACT_APP_DATA_HOST + '/get_counts').then(response =>
            response.json().then(data => {
                setDrugs(data);
                const obj = {
                    labels: data.map(d => d.Drug),
                    datasets: [
                        {
                            label: 'Drug',
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: data.map(d => d.Count),
                            backgroundColor: data.map(d =>
                                "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.5)"),

                            borderColor: data.map(d =>
                                "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "1)"),
                        }
                    ]
                }
                setChartData(obj);
            })
        );
    }, []);
    return (
        <div className="col">
            {
                chartdData ? <BarChart options={options} data={chartdData} /> : null
            }

        </div>
    );
}


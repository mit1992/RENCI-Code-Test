import React from 'react';
import { Bar } from 'react-chartjs-2';



export const BarChart = ({ options, data }) => {
    return (
        <div >
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
}

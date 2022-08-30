import React from 'react'
import EChartsReact from 'echarts-for-react';
import Records from '../Wine-Data.json';


const css = {
    boxSizing: "borderBox",
    fontSize: "2.5rem",
    textAlign: 'center',
    backgroundColor: "rgb(214 255 227 / 39%)"
}

function BarChart() {
    //Loop through alcohol
    const alcohol = Records && Records.map(ele => ele.Alcohol);

    // Loop through Malic Acid and find the average
    const avgMalicAcid = Records && Records.map(ele => ele['Malic Acid']).reduce((avg, value, _, {
        length
    }) => {
        return avg + (value / length);
    }, 0);
    var twoDecimal = Number(avgMalicAcid.toFixed(2));

    // Push the average of malic acid to an array according to the length of Records
    var finalAvg = []
    for (let i = 0; i <= Records.length; i++) {
        finalAvg.push(twoDecimal)
    }

    const option = {
        xAxis: {
            type: 'category',
            name: 'Alcohol',
            data: finalAvg
        },
        yAxis: {
            type: 'value',
            name: 'Malic Acid'
        },
        series: [
            {
                data: alcohol,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180,180,180, 0.2)'
                }
            }
        ]
    };
    return <>
        <div style={css}>
            <EChartsReact option={option} />
            <p>Bar Chart</p>
        </div>
    </>

}

export default BarChart
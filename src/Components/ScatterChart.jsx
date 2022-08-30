import React from 'react'
import EChartsReact from 'echarts-for-react';
import Records from '../Wine-Data.json';

const css = {
    boxSizing: "borderBox",
    fontSize: "2.5rem",
    textAlign: 'center',
    backgroundColor: "rgb(231 233 242 / 39%)"
}

function Echarts() {
    // Making an array of color intensity and hue to render in chart's format
    var final = []
    for (let i = 0; i <= Records.length; i++) {
        if ((Records[i])) {
            var arr = []
            arr.push(Records[i]['Color intensity'], Records[i].Hue)
            final.push(arr)
        }
    }

    const option = {
        xAxis: {
            scale: true,
            name: 'Color Intensity'
        },
        yAxis: {
            scale: true,
            name: 'Hue'
        },
        series: [
            {
                symbolSize: 10,
                type: 'scatter',
                data: final,
                backgroundStyle: {
                    color: 'rgba(255, 255, 0, 0.2)'
                }
            }
        ]
    };
    return <>
        <div className="charts" style={css}>
            <EChartsReact option={option} />
            <p>Scatter Chart</p>
        </div>
    </>
}

export default Echarts;
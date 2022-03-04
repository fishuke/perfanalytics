import React from 'react';
import {Line, LineChart, ResponsiveContainer, YAxis} from 'recharts';
import {Card, CardContent, Typography} from "@material-ui/core";


interface ChartProps {
    title: string,
    dataKey: string,
    data: Report[]
}

export default function Chart(props: ChartProps) {

    return (
        <Card data-testid="chart">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <ResponsiveContainer  width='99%' aspect={2.0 / 0.75}>
                    <LineChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <YAxis/>
                        <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                </ResponsiveContainer>

            </CardContent>
        </Card>

    );
}

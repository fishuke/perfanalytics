import React from 'react';
import './home.css';
import TableComponent from "../../components/table/table";
import Chart from "../../components/chart/chart";
import {getReports} from '../../services/api'
import TimePickerComponent from "../../components/time-picker/time-picker";
import useSWR from 'swr';

const THIRTY_MINUTES =  30 * 60 * 1000;

export default function Home(){
    const [startTime, setStartTime] = React.useState<Date | null>(new Date(new Date().getTime() - THIRTY_MINUTES));
    const [endTime, setEndTime] = React.useState<Date | null>(new Date());
    const fetcher = async () => {
        const startTimestamp = startTime ? startTime.getTime() : 0;
        const endTimestamp = endTime ? endTime.getTime() : 0;

        return await getReports(startTimestamp, endTimestamp);
    }

    const { data : reports, revalidate } = useSWR<Report[]>('reports', fetcher);

    return (
        <main className='main-container'>
            <div className='time-picker-container' data-testid="time-picker-container">
                <TimePickerComponent  label='Start Time' value={startTime} onUpdate={(value: Date | null) => {
                    setStartTime(value);
                    setTimeout(revalidate, 10);
                }}/>
                <TimePickerComponent data-testid="end-time" label='End Time' value={endTime} onUpdate={(value: Date | null) => {
                    setEndTime(value);
                    setTimeout(revalidate, 10);
                }}/>
            </div>

            <div className='chart-container'>
                <Chart title="TTFB" dataKey="timeToFirstByte" data={reports || []}/>
                <Chart title="FCP" dataKey="firstContentfulPaint" data={reports || []}/>
            </div>
            <div className='chart-container'>
                <Chart title="Dom Load" dataKey="domLoad" data={reports || []}/>
                <Chart title="Window Load" dataKey="windowLoad" data={reports || []}/>
            </div>

            <div className='table-container'>
                <TableComponent data={reports || []}/>
            </div>
        </main>
    );
}
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';

export default function TimePickerComponent(props: TimePickerProps) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker

                ampm={false}
                openTo="hours"
                views={['hours', 'minutes', 'seconds']}
                inputFormat="HH:mm:ss"
                mask="__:__:__"
                label={props.label}
                value={props.value}
                onChange={props.onUpdate}
                renderInput={(params) => <TextField data-testid="time-picker" {...params} />}
            />
        </LocalizationProvider>
    );
}
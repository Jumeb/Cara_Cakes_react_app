import React from 'react';
import DatePicker from 'react-datepicker';

import styles from './DatePicker.module.css';

const DatePick = (props) => {'transparent'
    const {startDate, setStartDate} = props;
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp"  className="datePickerInput datePickerLength-3" withPortal fixedHeight placeholderText="Add a date" />
    )
}

export default DatePick;

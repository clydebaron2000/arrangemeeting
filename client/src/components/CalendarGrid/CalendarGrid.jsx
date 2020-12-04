import React, {useEffect,useState} from 'react'
import Calendar from '../Calender';
import NamesList from '../NamesList';
const CalendarGrid=(props)=>{
    //these won't change
    const valid_dates=props.valid_dates;
    const valid_times=props.valid_times;
    //these will
    const [calendar_matrix,setCalendar_matrix]=useState(props.calendar_matrix)
    const [names_list,setNames_list]=useState(props.names_list)
    useEffect(()=>{
        const componentOutput={
            calendar_matrix:calendar_matrix,
            names_list:names_list
        }
        props.handleCalendarChange(componentOutput)
    },[calendar_matrix,names_list]);//if these update, submit.
    return (
        <div>
            <Calendar
            valid_dates={valid_dates}
            valid_times={valid_times}
            calendar_num_matrix={}//
            filter_by_name={}//filter calendar based on name
            />
            <NamesList
            handleNamePress={}//hands the name string up that was pressed. only one name can be submitted at a time
            />
        </div>
    )
}
export default CalendarGrid
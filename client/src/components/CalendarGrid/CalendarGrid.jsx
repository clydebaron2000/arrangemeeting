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
    const [filtered_name,setFiltered_name]=useState('')
    const [isEditing,setIsEdting]=useState(false);
    let temp_name='';
    //make an empty version of calendar_matrix
    let temp_cal=calendar_matrix.map(day=>day.map(timeblock=>[]));
    useEffect(()=>{
        const componentOutput={
            calendar_matrix:calendar_matrix,
            names_list:names_list
        }
        props.handleCalendarChange(componentOutput)
    },[calendar_matrix,names_list]);//if these update, submit.
    const add_availability=()=>{
        setIsEdting(true);
        //do other stuff here
        // 1. pop-up modal for temp_name
        // filter matrix with edit feature
        // make this button dissapear
        // display finalizeChanges button
    }
    const finalizeChanges=_=>{
        //turn isEditing off
        //make this button dissapear
        const temp_names_list=[...names_list,temp_name];
        setCalendar_matrix(temp_cal)
        setNames_list(temp_names_list)
    }
    const handleAvailabilityChange=calendar_matrix=>{
        temp_cal=calendar_matrix;//store in temp variable.
    }
    const handleNameHover=name_string=>{
        //if not editing, fliter
        if(!isEditing) setFiltered_name(name_string)
    }

    //ALL FORM STUFF ARE DONE IN THIS COMPONENT. 
    // CHILD COMPONENTS ARE MERELY FOR DISPLAY
    return (
        <div>
            <Calendar
            valid_dates={valid_dates}
            valid_times={valid_times}
            calendar_matrix={calendar_matrix}//
            filter_by_name={filtered_name}//filter calendar based on name
            isEditing={isEditing}
            handleAvailabilityChange={handleAvailabilityChange}
            />
            <button onClick={finalizeChanges}> confirm!</button>
            <button onClick={add_availability}>add your availability!</button>
            <NamesList
            names_list={names_list}
            handleNameHover={handleNameHover}//hands the name string up that was pressed. only one name can be submitted at a time
            />
        </div>
    )
}
export default CalendarGrid
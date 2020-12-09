import React, {useEffect,useState} from 'react'
import CalendarTable from '../CalenderTable/CalenderTable';
import NamesList from '../NamesList/NamesList'
import './styles.css';
// import AvailabilityContext from '../../utils/availabilityContext';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const AvailabilityChooser=(props)=>{
    //these won't change
    const valid_dates=props.valid_dates;
    const valid_times=props.valid_times;
    //these will
    const [calendar_matrix,setCalendar_matrix]=useState(props.calendar_matrix)
    const [names_list,setNames_list]=useState(props.names_list)
    const [filtered_name,setFiltered_name]=useState('')
    //edting interface
    const [isEditing,setIsEdting]=useState(false);
    
    let temp_name='';
    //make an empty version of calendar_matrix
    // let temp_cal=calendar_matrix.map(day=>day.map(timeblock=>[]));
    let temp_cal=calendar_matrix;
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
        let temp_names_list=names_list;
        temp_names_list.push(temp_name)
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
    const handleHoveredTime=name_array=>{
        //reduce the displayed names to just ones in the name_array
    }
    //ALL FORM STUFF ARE DONE IN THIS COMPONENT. 
    // CHILD COMPONENTS ARE MERELY FOR DISPLAY
    let editButtons="hide"
    return (
        <div className="ac-container">
            <div className="ac-header">
                <div id="header">Availabilities</div> 
                <button onClick={null} className={editButtons}> cancel</button>
                <button onClick={finalizeChanges} className={editButtons}> confirm</button>
                {/* TODO ABOVE */}
                <button onClick={add_availability}>add your availability</button>
            </div>
            <div className='ac-content'>
                {/* <AvailabilityContext.Provider
                value={
                    {
                        calendar_matrix:calendar_matrix,
                        calendar_int_matrix:null,
                        valid_dates:valid_dates,
                        valid_times:valid_times,
                        isEditing:isEditing,
                        hoveredEntry:[]
                    }
                }
                > */}
                    <CalendarTable
                        valid_dates={valid_dates}
                        valid_times={valid_times}
                        calendar_matrix={calendar_matrix}//
                        filter_by_name={filtered_name}//filter calendar based on name
                        handleHoveredTime={handleHoveredTime}
                        isEditing={true} //usually {isEditing}
                        handleAvailabilityChange={handleAvailabilityChange}
                        className="ac-grid"
                    />
                {/* </AvailabilityContext.Provider> */}
                <NamesList
                    namesList={names_list}
                    filteredNamesList={names_list[0]}
                    handleNameHover={handleNameHover}//hands the name string up that was pressed. only one name can be submitted at a time
                />
            </div>
        </div>
    )
}
export default AvailabilityChooser
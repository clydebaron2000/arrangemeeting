import React, {useEffect,useState} from 'react'
import CalendarTable from '../CalenderTable/CalenderTable';
import NamesList from '../NamesList/NamesList'
import './styles.css';
// import NamesList from '../NamesList/NamesList';
// import Modal from 'react-bootstrap/Modal';
const AvailabilityChooser=(props)=>{
    console.log(props)
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
        <div class="ac-container">
            <div class="ac-header">
                <h1>Availabilities</h1> 
                <button onClick={null} className={editButtons}> cancel</button>
                <button onClick={finalizeChanges} className={editButtons}> confirm</button>
                {/* TODO ABOVE */}
                <button onClick={add_availability}>add your availability</button>
            </div>
            <div class='ac-content'>
                <div id="leftbutton" className="hide">{`<`}</div>
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
                <div id="rightbutton" className='hide'>{`>`}</div>
                <NamesList
                    namesList={names_list}
                    filtereNamesList={null}
                    handleNameHover={handleNameHover}//hands the name string up that was pressed. only one name can be submitted at a time
                />
            </div>
        </div>
    )
}
export default AvailabilityChooser
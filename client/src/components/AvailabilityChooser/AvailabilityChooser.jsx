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
    const [tempCal,setTempCal]=useState(props.calendar_matrix)
    const [names_list,setNames_list]=useState(props.names_list)
    const [filterCalendarName,setFilterCalendarName]=useState(names_list)
    const [filterListNames,setFilterListNames]=useState(names_list)
    //edting interface
    const [isEditing,setIsEdting]=useState(false);
    const [tempName,setTempName]=useState('')
    const [showModal,setShowModal]=useState(false)
    //make an empty version of calendar_matrix
    // let temp_cal=calendar_matrix.map(day=>day.map(timeblock=>[]));
    useEffect(()=>{
        const componentOutput={
            calendar_matrix:calendar_matrix,
            names_list:names_list
        }
        props.handleCalendarChange(componentOutput)
    },[calendar_matrix,names_list]);//if these update, submit.
    const add_availability=()=>{
        setIsEdting(true);
        setShowModal(true)
    }
    const handleConfirmName=_=>{
        setShowModal(false)
        setFilterCalendarName(tempName)
    }
    const finalizeChanges=_=>{
        //turn isEditing off
        setIsEdting(false)
        //make this button dissapear
        let temp_names_list=names_list;
        temp_names_list.push(tempName)
        setCalendar_matrix(tempCal)
        setNames_list(temp_names_list)
    }
    const endEdit=_=>{
        setShowModal(false)
        setIsEdting(false)
        setTempName('')
        setFilterCalendarName(false)
        setTempCal(calendar_matrix)
    }
    const handleAvailabilityChange=calendar_matrix=>{
        setTempCal(calendar_matrix);//store in temp variable.
    }
    const handleNameHover=name_array=>{
        //if not editing, fliter
        if(!isEditing) {
            if (name_array===[])name_array=names_list;// if no hover, just set to default value
            setFilterCalendarName(name_array)
        }
    }
    const handleHoveredTime=name_array=>{
        //reduce the displayed names to just ones in the name_array
        if(!isEditing) {
            if (name_array===[])name_array=names_list;// if no hover, just set to default value
            setFilterListNames(name_array)
        }
    }
    const handleTempName=e=>{
        const name=e.target.value;
        setTempName(name)
    }

    useEffect(_=>{

    },[])
    
    //ALL FORM STUFF ARE DONE IN THIS COMPONENT. 
    // CHILD COMPONENTS ARE MERELY FOR DISPLAY
    return (
        <div className="ac-container" >
            <Modal show={showModal}>
                <Modal.Header closeButton onHide={endEdit}>
                    <Modal.Title>
                        Mark your Availability
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                            <input className="nameInput" onChange={handleTempName} placeholder="Your name" />                            
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="cancel" onClick={endEdit}>
                            cancel
                        </button>
                        <button className="nameSubmit" onClick={handleConfirmName}>
                            continue
                        </button>
                    </Modal.Footer>
            </Modal>
            <div className="ac-header">
                <div id="header">Availabilities</div> 
                <div>
                <button onClick={endEdit} className={(isEditing===true)?"":"hide"}> cancel</button>
                <button onClick={finalizeChanges} className={(isEditing===true)?"":"hide"}> confirm</button>
                {/* TODO ABOVE */}
                <button onClick={add_availability} className={(isEditing===false)?"":"hide"}>add your availability</button>
                </div>
            </div>
            <div className='ac-content'>
                {/* <AvailabilityContext.Provider
                value={
                    {
                        calendar_matrix:calendar_matrix,
                        calendar_int_matrix:calendar_matrix,
                        valid_dates:valid_dates,
                        valid_times:valid_times,
                        isEditing:isEditing,
                        hoveredEntry:[]
                    }
                }> */}
                    <CalendarTable
                        valid_dates={valid_dates}
                        valid_times={valid_times}
                        calendar_matrix={calendar_matrix}//
                        filter_by_name={filterCalendarName}//filter calendar based on name
                        handleHoveredTime={handleHoveredTime}
                        isEditing={true} 
                        handleAvailabilityChange={handleAvailabilityChange}
                        className="ac-grid"
                    />
                {/* </AvailabilityContext.Provider> */}
                <NamesList
                    namesList={names_list}
                    isEditing={isEditing}
                    filteredNamesList={filterListNames}
                    handleNameHover={handleNameHover}//hands the name string up that was pressed. only one name can be submitted at a time
                />
            </div>
        </div>
    )
}
export default AvailabilityChooser
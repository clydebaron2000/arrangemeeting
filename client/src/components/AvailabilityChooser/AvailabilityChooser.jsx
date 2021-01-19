import React, {useEffect,useState} from 'react'
import CalendarTable from '../CalenderTable/CalenderTable';
import NamesList from '../NamesList/NamesList'
import './styles.css';
import AvailabilityContext from '../../contexts/availabilityContext';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const AvailabilityChooser=(props)=>{
    //these won't change
    //these will
    const [calMatrix,setCalMatrix]=useState(props.calendar_matrix)
    const [names_list,setNames_list]=useState(props.names_list)
    const [r,setR]=useState(0)
    const [isCalled,setIsCalled]=useState(false)
    // const [filteredCalName,setFilterCalName]=useState(names_list)
    // const [filteredListNames,setFilterListNames]=useState(names_list)
    //edting interface
    const [tempName,setTempName]=useState('')
    const [showModal,setShowModal]=useState(false)
    const [context,setContext]=useState({ 
        tempCalMatrix:props.calendar_matrix,
        isEditing:false, //for testing
        isSelecting:false,//set in calendar component
        filteredCalName: "",
        filteredListNames: props.names_list,
        validDates:props.valid_dates,
        validTimes:props.valid_times,
        setIsEditing:function(isEditing){
            this.isEditing=isEditing
            setContext(this)
            setIsCalled(!isCalled)
        },
        setTempCalMatrix:function(tempCalMatrix){
            this.tempCalMatrix=tempCalMatrix
            setContext(this)
            setIsCalled(!isCalled)
        },
        setIsSelecting:function(isSelecting){
            this.isSelecting=isSelecting
            setContext(this)
            setIsCalled(!isCalled)
        },
        setFilteredListNames:function(filteredListNames){
            this.filteredListNames=filteredListNames
            setContext(this)
            setIsCalled(!isCalled)
        },
        setFilteredCalName:function(filteredCalName){
            this.filteredCalName=filteredCalName
            setContext(this)
            setIsCalled(!isCalled)
        }
    })
   
    const add_availability=()=>{
        setShowModal(true)
    }
    const handleConfirmName=_=>{
        if(tempName!=''&&tempName[0]!=" "){
            setShowModal(false)
        context.setFilteredCalName(tempName)
        context.setIsEditing(true);
        console.log("trying to edit")
        setIsCalled(!isCalled)}
        
    }
    const finalizeChanges=_=>{
        //turn isEditing off
        setShowModal(false)
        context.setIsEditing(false)
        context.setIsSelecting(false)
        //make this button dissapear
        let temp_names_list=names_list;
        temp_names_list.push(tempName)
        setCalMatrix(context.tempCalMatrix)
        setNames_list(temp_names_list)
        // setIsCalled(!isCalled)
        context.setFilteredCalName(names_list)
        endEdit()
        context.setFilteredCalName(temp_names_list)
        console.log('fiin:',temp_names_list)
        
    }
    const endEdit=_=>{
        setShowModal(false)
        context.setIsEditing(false)
        setTempName('')
        context.setFilteredCalName('')
        context.setTempCalMatrix(calMatrix)
        context.setFilteredCalName(names_list)
    }
    const handleNameHover=name_array=>{
        //if not editing, fliter
        if(context.isEditing===false) {
            if (name_array===[])name_array=names_list;// if no hover, just set to default value
            context.setFilteredCalName(name_array)
        }
        setIsCalled(!isCalled)
    }
    const handleTempName=e=>{
        const name=e.target.value;
        setTempName(name)
        setIsCalled(!isCalled)
    }
    // const handleHoveredTime=()=>{}

    useEffect(_=>{
        console.log("parent change")
    },[isCalled,names_list])
    useEffect(_=>{
        if(context.isEditing)setTimeout(setR(r+1),7000)
        else context.setFilteredCalName(names_list)
    },[r,context.isEditing,names_list,context.filteredCalName])
    return (
        <div className="ac-container" >
            <Modal show={showModal}>
                <Modal.Header closeButton onHide={endEdit}>
                    <Modal.Title>
                        Step 1: Enter your name!
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
                <button onClick={endEdit} className={(context.isEditing===true)?"":"hide"}> cancel</button>
                <button onClick={finalizeChanges} className={(context.isEditing===true)?"":"hide"}> confirm</button>
                {/* TODO ABOVE */}
                <button onClick={add_availability} className={(context.isEditing===false)?"":"hide"}>add your availability</button>
                </div>
            </div>
            <div className='ac-content'>
                <AvailabilityContext.Provider value={context}>
                    <CalendarTable
                        className="ac-grid"
                    />
                </AvailabilityContext.Provider>
                <NamesList
                    namesList={names_list}
                    isEditing={context.isEditing}
                    filteredNamesList={context.filteredListNames}
                    handleNameHover={handleNameHover}//hands the name string up that was pressed. only one name can be submitted at a time
                />
            </div>
        </div>
    )
}
export default AvailabilityChooser
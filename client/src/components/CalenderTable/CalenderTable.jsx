import React,{useState} from 'react'
import './styles.css';
import DayColumn from '../DayColumn/DayColumn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
function Calendar(props){          
  const [validDates]=useState(props.valid_dates)    
  const [validTimes]=useState(props.valid_times)   
  const [calendarMatrix,setCalendarMatrix]=useState(props.calendar_matrix)    
  const [filteredName,setFilteredName]=useState(props.filtered_name)    
  const [isEditing,setIsEditing]=useState(props.isEditing)
  const [isMouseDown,setIsMouseDown]=useState(false)//initialize to false  
  const onMouseDown=_=>{
    if (isEditing){
      console.log('down')
      setIsMouseDown(true)
    }
  }
  const onMouseUp=_=>{
    if(isEditing){
      console.log('up')
      setIsMouseDown(false)
    }
  }
  const handleDayChange=(dayChangeObj)=>{
    const dayIndex=dayChangeObj.dayIndex
    const dayData=dayChangeObj.dayData
    let tempMatrix=calendarMatrix
    tempMatrix[dayIndex]=dayData
    setCalendarMatrix(tempMatrix)
  }
  useState(()=>{

  },[calendarMatrix])
  return (
    <div className="calendarTable">
      <button className="l">
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
      <div id="timeLabelColumn">
        {(validTimes.start!==undefined)?(
          <div className="Timezone" defaultValue=''>
            {validTimes.start.toString().split(' ')[5]}
          </div> 
        ):null}
        {(validTimes.start!==undefined)?(
          [...Array(parseInt(Math.ceil((validTimes.end.valueOf()-validTimes.start.valueOf())/1000/60/60))).keys()].map(i=>
          <div className="time">{
            new Date(validTimes.start.valueOf()+i*60*60*1000).toLocaleTimeString().replace(":00:00",'')
          }</div>
          ))
        :null}   
      </div>
      
      <div id="ac_grid">
        {
        (calendarMatrix!==undefined)?[...Array(calendarMatrix.length).keys()].map(i=>{
        return (<DayColumn
          date={validDates[i]}
          isStartOnHalfHour={false}
          hourArray={calendarMatrix[i]}
          classname="dayColumn"
          isSelecting={isMouseDown}
          filtered_name={filteredName}
          handleDayChange={handleDayChange}
          dayIndex={i}
        /> ) }
        ):null
        }
      </div>
        {/* <button className="r">
        <FontAwesomeIcon icon={faChevronRight}/>
        </button> */}
    </div>
  )
}

export default Calendar
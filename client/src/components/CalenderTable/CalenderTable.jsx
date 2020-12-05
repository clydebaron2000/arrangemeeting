import React,{Component,useState} from 'react'
import './styles.css';
import DayColumn from '../DayColumn/DayColumn'
function Calendar(props){          
  const [validDates]=useState(props.valid_dates)    
  const [validTimes]=useState(props.valid_times)    
  console.log(props)
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
      <div id="timeLabelColumn">1 </div>
      <div id="ac_grid">
        {
        (calendarMatrix!==undefined)?[...Array(calendarMatrix.length).keys()].map(i=>{
          console.log('index:',i)
        return (<DayColumn
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
    </div>
  )
}

export default Calendar
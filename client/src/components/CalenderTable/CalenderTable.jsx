import React,{useState,useEffect} from 'react'
import './styles.css';
import DayColumn from '../DayColumn/DayColumn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
function Calendar(props){          
  const [validDates]=useState(props.valid_dates)    
  const [validTimes]=useState(props.valid_times)   
  const [calendarMatrix,setCalendarMatrix]=useState(props.calendar_matrix)    
  const [isSelecting,setIsSelecting]=useState(false)//initialize to false  
  const [renderedColumns,setRenderedColumns]=useState((<div></div>))
 
  const handleDayChange=(dayChangeObj)=>{
    const dayIndex=dayChangeObj.dayIndex
    const dayData=dayChangeObj.dayData
    let tempMatrix=calendarMatrix
    tempMatrix[dayIndex]=dayData
    setCalendarMatrix(tempMatrix)
  }
  const mouseUp=_=>{if(props.isEditing===true)setIsSelecting(false)}
  const mouseDown=_=>{if(props.isEditing===true)setIsSelecting(true)}
  
  //new
  useEffect(_=>{
    props.handleAvailabilityChange(calendarMatrix)
  },[calendarMatrix])


  //
  useEffect(()=>{
    console.log('caltable change',isSelecting)
    console.log(calendarMatrix)
    setRenderedColumns(
      (calendarMatrix!==undefined)?[...Array(calendarMatrix.length).keys()].map(i=>{
        return (<DayColumn
          date={validDates[i]}
          hourArray={calendarMatrix[i]}
          classname="dayColumn"
          isSelecting={isSelecting}
          filtered_name={props.filtered_name}
          handleDayChange={handleDayChange}
          dayIndex={i}
          key={i}
        /> ) }
        ):null
    )
  },[isSelecting])
  return (
    <div className="calendarTable" >
      <button className="l">
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button>
      <div id="timeLabelColumn">
        {(validTimes.start!==undefined)?(
          <div className="Timezone" defaultValue=''>
            {validTimes.start.toString().split(' ')[5].split('-').map(t=>
              <p>{t}</p>
              )}
          </div> 
        ):null}
        {(validTimes.start!==undefined)?(
          [...Array(parseInt(Math.ceil((validTimes.end.valueOf()-validTimes.start.valueOf())/1000/60/60))).keys()].map(i=>
          <div className="time" key={i}>{
            new Date(validTimes.start.valueOf()+i*60*60*1000).toLocaleTimeString().replace(":00:00",'')
          }</div>
          ))
        :null}   
      </div>
      
      <div id="ac_grid" onMouseUp={mouseUp} onMouseDown={mouseDown}>
        {
        renderedColumns
        }
      </div>
        <button className="r">
        <FontAwesomeIcon icon={faChevronRight}/>
        </button>
    </div>
  )
}

export default Calendar
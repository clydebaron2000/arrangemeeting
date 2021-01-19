import React,{useState,useEffect,useContext} from 'react'
import './styles.css';
import DayColumn from '../DayColumn/DayColumn'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import AvailabilityContext from '../../contexts/availabilityContext.jsx';
function Calendar(props){          
  const context =useContext(AvailabilityContext)
  const [visIndexes,setVisIndexes]=useState({
    start:0,
    end:(context.validDates.length<7)?context.validDates.length:7
  })
  
  
  const leftArrow=_=>{
    console.log("l")
    let min =0
    let inc=Math.max(-7-1,-visIndexes.start)
    let out=visIndexes
    if (inc+out.start<min) return;
    out.end=out.start
    out.start+=inc
    setVisIndexes(out)
  }
  const rightArrow=_=>{
    console.log("r")
    let max=context.validDates.length;
    let inc=Math.min(7,max-visIndexes.end)
    let out=visIndexes
    if (inc+out.end>max) return;
    out.start=out.end
    out.end+=inc
    setVisIndexes(out)
  }
  useEffect(()=>{
    console.log('eff',visIndexes)
  },[context,visIndexes.start,visIndexes.end])
  return (
    <div className="calendarTable" >
      {/* <button className={(visIndexes.start<=0)?"hide":"l"} onClick={leftArrow}>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </button> */}
      <div id="timeLabelColumn">
        {(context.validTimes.start!==undefined)?(
          <div className="Timezone" defaultValue=''>
            {context.validTimes.start.toString().split(' ')[5].split('-').map(t=>
              <p key={t}>{t}</p>
              )}
          </div> 
        ):null}
        {(context.validTimes.start!==undefined)?(
          [...Array(parseInt(Math.ceil((context.validTimes.end.valueOf()-context.validTimes.start.valueOf())/1000/60/60))).keys()].map(i=>
          <div className="time" key={i}>{
            new Date(context.validTimes.start.valueOf()+i*60*60*1000).toLocaleTimeString().replace(":00:00",'')
          }</div>
          ))
        :null}   
      </div>
      
      <div id="ac_grid">
        {(context.tempCalMatrix!==undefined)?[...Array(visIndexes.end-visIndexes.start).keys()].map(i=>{
          return (<DayColumn
            // date={context.validDates[visIndexes.start+i]}
            // hourArray={context.tempCalMatrix[visIndexes.start+i]}
            // classname="dayColumn"
            // filtered_name={props.filtered_name}
            // handleDayChange={()=>{}}
            dayIndex={visIndexes.start+i}
            key={visIndexes.start+i}
          /> ) }
          ):null
        }
      </div>
        {/* <button className={(visIndexes.end>=context.validDates.length)?"hide":"r"} onClick={rightArrow}>
        <FontAwesomeIcon icon={faChevronRight}/>
        </button> */}
    </div>
  )
}

export default Calendar
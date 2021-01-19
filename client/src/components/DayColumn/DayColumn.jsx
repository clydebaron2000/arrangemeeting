import React,{useState,useEffect,useContext} from 'react'
import './styles.css';
import TimeBlock from '../TimeBlock/TimeBlock'
import AvailabilityContext from '../../contexts/availabilityContext.jsx';


function DayColumn(props){
    const context =useContext(AvailabilityContext)

    const [dayofweek,month,daynum]=context.validDates[props.dayIndex].toDateString().split(' ')
    useEffect(_=>{},[context])
    return (
    <div className="dayColumn" >    
        <div className="dayHeader">
                <span className="dayOfWeek">{dayofweek}</span>
            <span className="dayHeaderContent">
                <span className="month-date">{month} {daynum}</span>
            </span>
        </div>
        <div className="slots">
       { [...Array(parseInt(context.tempCalMatrix[props.dayIndex].length)).keys()].map(i=>//knowing that we always start on the hour mark
                    (i%2===0)?
                    <div className='hourblock' key={i}>
                        <TimeBlock   
                        dayIndex={props.dayIndex} 
                        blockIndex={i}
                        key={0}
                        />
                        <TimeBlock   
                        dayIndex={props.dayIndex} 
                        blockIndex={i+1}
                        key={1}
                        />
                    </div>:null
                    )}
        </div>
    </div>
    )
}
export default DayColumn
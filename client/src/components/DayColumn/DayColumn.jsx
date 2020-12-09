import React,{Component,useState,useEffect} from 'react'
import './styles.css';
import TimeBlock from '../TimeBlock/TimeBlock'
import OutlineBox from '../OutLineBox/OutLineBox'
function DayColumn(props){
    const [dayofweek,month,daynum]=props.date.toDateString().split(' ')
    const [info]=useState({
        dayofweek:dayofweek,
        daynum:daynum,
        month:month
    })
    const [slots]=useState(props.date)
    const [isSelecting]=useState(props.isSelecting)
    const [filteredName]=useState(props.filtered_name)
    const [dayIndex]=useState(props.dayIndex)
    const [startOnHalf]=useState(props.isStartOnHalfHour)
    const [output,setOutput]=useState()
    useEffect(_=>{
        let out;
        let i=0;
        if (startOnHalf){
            out+=(
                <div className='hourblock'>
                    <TimeBlock
                    
                    />
                </div>
            )
        }
    },[slots,isSelecting,filteredName,startOnHalf,output])
    return (
    <div className="dayColumn">    
        <div className="dayHeader">
                <span className="dayOfWeek">{info.dayofweek}</span>
            <span className="dayHeaderContent">
                <span className="month-date">{info.month} {info.daynum}</span>
            </span>
        </div>
        <div className="slots">
            
            {[...Array(10)].map(_=>
            <div className='hourblock'>
                <TimeBlock/>
                <TimeBlock/>
            </div>
            )}
        </div>
    </div>
    )
}
export default DayColumn
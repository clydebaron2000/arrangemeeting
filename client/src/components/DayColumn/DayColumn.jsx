import React,{Component,useState} from 'react'
import './styles.css';
import TimeBlock from '../TimeBlock/TimeBlock'
import OutlineBox from '../OutLineBox/OutLineBox'
function DayColumn(props){
    console.log('daycolumn props',props)
    return (
    <div className="dayColumn">
        <div class="dayHeader">
            <span className="dayHeaderContent">
                <span class="month">M</span>
                <span class="dayOfWeek">D</span>
            </span>
                <span class="date">#</span>
        </div>
        <div className="slots">
            {[...Array(20)].map(_=><TimeBlock></TimeBlock>)}
        </div>
    </div>
    )
}
export default DayColumn
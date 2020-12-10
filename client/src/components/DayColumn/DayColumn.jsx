import React,{Component,useState,useEffect} from 'react'
import './styles.css';
import TimeBlock from '../TimeBlock/TimeBlock'
function listCount(list,str=''){
    if (str==='')return list.length
    return list.reduce((total,current)=>(current===str)?total+1:total,0)
  }
function DayColumn(props){
    const [dayofweek,month,daynum]=props.date.toDateString().split(' ')
    const [info]=useState({
        dayofweek:dayofweek,
        daynum:daynum,
        month:month
    })
    const [output,setOutput]=useState([])
    const [timeBlocks,setTimeBlocks]=useState((<div></div>))
    const handleBlockChange=obj=>{
        let tempSlots=props.hourArray;
        if (obj.isOverlay===true&&props.filtered_name!==undefined){
        tempSlots[parseInt(obj.key/.5)].push(props.filtered_name)
        }
        else{
            let index=tempSlots[parseInt(obj.key/.5)].indexOf(props.filtered_name)
            if (index!==-1&&index<tempSlots.length){
                tempSlots.splice(index,1)
            }
        }
        setOutput(tempSlots)
    }
    // useEffect(_=>{
    //     if (output!==[]){
    //     props.handleDayChange(
    //         {
    //             dayIndex:props.dayIndex,
    //             dayData:output
    //         }
    //     )}
    // },[output,props])
    useEffect(_=>{
        if (props.hourArray!==undefined){
            console.log(props.hourArray)
            setTimeBlocks(
                [...Array(parseInt(props.hourArray.length/2)).keys()].map(i=>//knowing that we always start on the hour mark
                    <div className='hourblock' key={i}>
                        <TimeBlock isSelecting={props.isSelecting} shadeNum={listCount(props.hourArray[i],props.filteredName)} isOverlay={false} blockChange={handleBlockChange} 
                        key={i}/>
                        <TimeBlock isSelecting={props.isSelecting} shadeNum={listCount(props.hourArray[i],props.filteredName)} isOverlay={false} blockChange={handleBlockChange} 
                        key={i+.5}/>
                    </div>
                    )
            )}
    },[props])
    return (
    <div className="dayColumn" >    
        <div className="dayHeader">
                <span className="dayOfWeek">{info.dayofweek}</span>
            <span className="dayHeaderContent">
                <span className="month-date">{info.month} {info.daynum}</span>
            </span>
        </div>
        <div className="slots">
            {timeBlocks}
        </div>
    </div>
    )
}
export default DayColumn
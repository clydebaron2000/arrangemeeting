import React,{useEffect,useState,useContext} from 'react'
import './styles.css';
import AvailabilityContext from '../../contexts/availabilityContext';

function listCount(list,str=''){
    if(list===undefined)return 0
    if (str==='')return list.length
    return list.reduce((total,current)=>(current===str)?total+1:total,0)
  }
  function toggle_push_to_list(list,val){
    let flag=-1
    if(list===undefined)return list
    for(let v of list){
     if (v===val){
       flag=list.indexOf(v)
     }
    }
    if (flag===-1||flag>list.length){
      list.push(val)
    } else{
      list.splice(flag,1)
    }
    return list
  }
function TimeBlock(props){
    // const [isCalled,setIsCalled]=useState(false)
    const c =useContext(AvailabilityContext)
    const toggle=()=>{
        let tc=c.tempCalMatrix
        tc[props.dayIndex][props.blockIndex]=toggle_push_to_list(tc[props.dayIndex][props.blockIndex],c.filteredCalName)
        c.setTempCalMatrix(tc)
    }
    const mouseOver=_=>{
        console.log('hover','ised',c.isEditing,'issel',c.isSelecting)
        if (c.isEditing===true&&c.isSelecting===true){
            toggle()
            console.log("drag toggle")
        }else{
            let tc=c.tempCalMatrix
            console.log(`cell hover ${tc[props.dayIndex][props.blockIndex]}`)
            c.setFilteredListNames(tc[props.dayIndex][props.blockIndex])
        }
    }
    const mouseUp=_=>{
        if(c.isEditing===true)c.setIsSelecting(false)
        console.log("up")
    }
    const mouseDown=_=>{
        if(c.isEditing===true)c.setIsSelecting(true)
        toggle()
        console.log("down",c.isSelecting)
    }
    useEffect(_=>{
        // console.log("block",c)
    },[c])
    useEffect(_=>{
        // console.log("sel",c.isSelecting)
    },[c.isSelecting])
    return (
        <div className={`reg shade${listCount(c.tempCalMatrix[props.dayIndex][props.blockIndex],c.filteredCalName)} `}
        onMouseOver={mouseOver}
        onMouseUp={mouseUp}
        onMouseDown={mouseDown}
        ></div>
    )
    
}
export default TimeBlock





// import React, { useContext } from "react";

// import DeveloperContext from "../utils/DeveloperContext";



//  const { name, mood, excitementLevel } = useContext(DeveloperContext);

import React,{useState,useEffect} from 'react'
import './styles.css';

function TimeBlock(props){
    // const [isSelecting,sis]=useState(props.isSelecting);
    const [isOverlay,setIsOverlay]=useState(props.isOverlay);
    //helper fx
    console.log('is',props.isSelecting)
    const toggleIsOverlay=_=>{
        if (isOverlay===true)setIsOverlay(false)
        else if (isOverlay===false) setIsOverlay(true)
        else {
            throw new Error('ERR: TimeBlock props.isOverlay is not a boolean');
        }
    }
    const mouseOver=_=>{
        console.log('isSelecting',props.isSelecting);
        if(props.isSelecting===true){        
            console.log('toggle')
            toggleIsOverlay()
        }
    }
    // useEffect(_=>{
    //     console.log()
    //     props.blockChange(
    //         {
    //             key:props.key,
    //             shadeNum:props.shadeNum,
    //             isOverlay:isOverlay
    //         }
    //     )
    // },[props,isOverlay])
    return (
        <div className={`reg shade${props.shadeNum} ${(isOverlay===true)?'overlay':''}`}
        onMouseOver={mouseOver}
        // onMouseOverCapture={mouseOut}
        // onClick={mouseOver}
        ></div>
    )
    
}
export default TimeBlock





// import React, { useContext } from "react";

// import DeveloperContext from "../utils/DeveloperContext";



//  const { name, mood, excitementLevel } = useContext(DeveloperContext);

import React,{Component} from 'react'
import './styles.css';
function OutlineBox(props){
    return(
    <div class='hourblock'>{props.content}</div>
    )
}
export default OutlineBox

//compnent did mount=>useEffect
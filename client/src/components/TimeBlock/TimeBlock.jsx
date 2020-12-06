import React,{Component} from 'react'
import './styles.css';
export default class TimeBlock extends Component{
    state={
        
    }
    constructor(props){
        super(props)
        this.onMouseDown=props.onMouseDown
        this.onMouseUp=props.onMouseUp
        this.state.shade=props.shade
        this.state.shade=props.shade
    }
    render(){
        return (
            <div className="reg">block</div>
        )
    }
}
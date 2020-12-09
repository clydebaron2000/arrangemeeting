import React,{Component} from 'react'
import './styles.css';
export default class TimeBlock extends Component{
    state={
        shade:0,
    }
    constructor(props){
        super(props)
        this.state.shade=props.shade
        
    }
    render(){
        return (
            <div className="reg"></div>
        )
    }
}
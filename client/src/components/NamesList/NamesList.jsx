import React,{useState,useEffect} from 'react'
import './styles.css';
function NamesList(props){
    const [namesList]=useState(props.namesList);
    const [filteredNamesList,setFilteredNamesList]=useState(props.filteredNamesList);
    const [fraction,setFractionString]=useState('')
    useEffect(_=>{
        if (filteredNamesList===undefined||filteredNamesList===null)
            setFilteredNamesList(namesList)
        let l=namesList.length;
        let f=filteredNamesList.length;
        console.log(f,l,)
        if (f!==l)
            setFractionString(''+f+'/'+l+'')
        else
            setFractionString('')
    },[namesList,filteredNamesList])
    const onHover=e=>{
        const val=e.target.outerText;
        props.handleNameHover(val)
    }
    //do things
    return (
        <div className='namesCol'>{
            (namesList!==undefined&&filteredNamesList!==undefined)?(        
            <div className="namesList">
                <div className="header">Respondees {(fraction!=='')?"("+fraction+")":""}</div>
                <div className="line"></div>
            <div className="list">
                {namesList.map(name=>{
                    return <div id='1'
                    className={(filteredNamesList.indexOf(name)!==-1)?'':'crossOut'}
                    onMouseOver={onHover}
                    >
                        {name}
                    </div>}
                    )}
            </div>
        </div>):null}
        </div>
    )
}
export default NamesList
import React, {useEffect, useState} from 'react';
import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencilAlt,faShareAlt,faSave} from '@fortawesome/free-solid-svg-icons'
import autosize from 'autosize'

function EventInfo(props){
    const [title,setTitle]=useState(`${props.title}`)
    const [description,setDescription]=useState(`${props.description}`)
    const [isEditing,setIsEditingTo]=useState(false)
    const [showDefaultElements,showDefault]=useState('')
    const [showEditingElements,showEditing]=useState('hide')
    const urlending=props.urlending;
    const [tempTitle,setTempTitle]=useState('')
    const [tempDesc,setTempDesc]=useState('')
    const [shareText,setShareText]=useState('share')
    const handleShare=_=>{
        const full_path=window.location.href;
        console.log('path copied:',full_path)
        navigator.clipboard.writeText(full_path)
        tempShareNotif()
    }
    const tempShareNotif=_=>{
        setShareText('Link Copied!')
        setTimeout(() => {
            setShareText('share')
        }, 1000);
    }
    //setters for input changes
    const handleEdit=_=>setIsEditingTo(true)
    const handleTitleChange=e=>setTempTitle(e.target.value)
    const handledeDescriptionChange=e=>{
        autosize(e.target)
        setTempDesc(e.target.value)
    }
    //button handlers for submission form
    const handleConfirm=_=>{
        if(tempTitle!==""||tempDesc!==""){//if not empty
            console.log("TempTitle:",tempTitle);
            console.log("Temp Description:",tempDesc);
            setIsEditingTo(false)
            setTitle(tempTitle)
            setDescription(tempDesc)//trigger submission effect
            console.log("Title:",title);
            console.log("Description:",description);
            props.handleInfoChange({name: tempTitle,description: tempDesc})
        }
    }
    const handleCancel=_=>{
        setIsEditingTo(false)
    }
    useEffect(_=>{//update elements edit/non-edit state
        if (isEditing){
            showDefault('hide')
            showEditing('edit')
            setTempTitle(title)
            setTempDesc(description)//start editing blocks with text in them
        }
        else{
            showDefault('')
            showEditing('hide')
            
        }
    },[isEditing])
    // useEffect(_=>{//submission block
    //     const submissionObj={
    //         title:title,
    //         description:description,
    //         urlending:urlending
    //     }
    //     console.log("Submission: ",submissionObj);
    //     props.handleInfoChange(submissionObj)
    // },[title,description,urlending]);
    return(
        <form id="event-info" onSubmit={e=>e.preventDefault()}>
            <div id="event-title-wrapper">
                <div id="event-title" className={showDefaultElements}>{title}</div>
                <input id="edit-title" placeholder="you must have a title" required maxLength="50" className={showEditingElements} value={tempTitle} type='text' onChange={handleTitleChange}/>
                <div id="event-title-buttons">
                    <button id="edit-btn" onClick={handleEdit} className={showDefaultElements}>
                        <FontAwesomeIcon icon={faPencilAlt}/> edit
                    </button>
                    <button className={showEditingElements} id="save-btn" onClick={handleConfirm}>
                        <FontAwesomeIcon icon={faSave}/> save
                    </button>
                    <button className={showEditingElements} id="edit-btn" onClick={handleCancel}>cancel</button>
                    <button id="link-btn" onClick={handleShare}>
                        <FontAwesomeIcon icon={faShareAlt}/> {shareText}
                    </button>
                </div>
            </div>
            <div className="underline"> </div>
            <div className={showDefaultElements}>
                {description}
            </div>
            <textarea id="edit-desc" required placeholder="you must have a description" conetenteditable maxLength="250" className={showEditingElements} type='text' value={tempDesc} onChange={handledeDescriptionChange}/>
        </form>
    )
}
export default EventInfo
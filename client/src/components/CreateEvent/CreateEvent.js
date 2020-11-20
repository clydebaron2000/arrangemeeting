import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import Example from '../ModalWindow/modalWindow'





const CreateEvent = () => (
	<div className= "createEventDiv">
		
	  <h2 className="createH2">Create Event Page!</h2>
    <Example/>
       
	  <p><Link to="/">Head back to home</Link></p>	
	</div>
);

export default CreateEvent;


import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const CreateEvent = () => (
    <div>
	  <h2>This is the create event page!</h2>
	  <p><Link to="/">Head back to home</Link></p>
    </div>
);

export default CreateEvent;
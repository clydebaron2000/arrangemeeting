import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


const ViewEvent = () => (
	<div className= "viewEventDiv">
			<Navbar/>
		
	  <h2 className="viewH2">view Event Page!</h2>
    
       
	  <p><Link to="/">Head back to home</Link></p>	
	</div>
);

export default ViewEvent
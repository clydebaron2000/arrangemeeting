import React, {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import API from '../../utils/api'

const EventPage = () => {
// 	const [data,setData]=useState({});
// 	const [data,setData]=useState({});
// 	const [data,setData]=useState({});
	
	
	return (
	<div className= "viewEventDiv">
		
	  <h2 className="viewH2">view Event Page!</h2>
    
       
	  <p><Link to="/">Head back to home</Link></p>	
	</div>
)};

export default EventPage
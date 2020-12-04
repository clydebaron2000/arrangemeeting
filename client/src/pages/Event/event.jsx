import React, {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import API from '../../utils/api'
import EventTitle from '../../components/EventTitle/'
import EventDescription from '../../components/EventDescription/'
import CalendarGrid from '../../components/CalendarGrid';
const EventPage = () => {
	const [data,setData]=useState({});
	const [urlending,setUrl]=useState({});
	const [currentUsername,setCurrentUserName]=useState({});
	
	
	return (
	<div>
		<EventTitle title=""/>
		<button id='editBtn'>Edit Event</button>
		<button id='shareBtn'>Share this event link!</button>
		<EventDescription description=""/>
		<CalendarGrid 
		valid_dates={[]}
		valid_times={{}}
		calendar_matrix={[[[]]]}
		names_list={}
		/>
    
       
	</div>
)};

export default EventPage
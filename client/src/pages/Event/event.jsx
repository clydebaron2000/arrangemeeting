import React, {useEffect,useState} from 'react'
import { Link,Redirect,useParams } from 'react-router-dom'
import API from '../../utils/api'
import EventTitle from '../../components/EventTitle/'
import EventDescription from '../../components/EventDescription/'
import CalendarGrid from '../../components/CalendarGrid';
const EventPage = () => {
	const [eventData,setData]=useState({});
	const [urlending,setUrl]=useState({});
	const [currentUsername,setCurrentUserName]=useState({});
	const {urlending}=useParams();
	const fetchDataBy_urlending=(url)=>{
		API.searchByURL(url).then(res=>{
		console.log(res.status,typeof res.status);
		if (res.status==400){//if not found
			return (<Redirect to='/'/>) // go to homepage
		}
		setData(res.data);//otherwise, set data
	})}
	const updateData=_=>{
		API.postEvent(eventData);
	}
	
	const handleInputChange=event=>{
		//update data
		const new_data=null;//TODO: update this
		setData(new_data);
	}
	useEffect(()=>{
		updateData(eventData)
		fetchDataBy_urlending(urlending)
	},[eventData]);
	//first fetch
	fetchDataBy_urlending(urlending)
	
	
	return (
	<div>
		<EventTitle title={eventData.description}/>
		<button id='editBtn'>Edit Event</button>
		<button id='shareBtn'>Share this event link!</button>
		<EventDescription description={eventData.description}/>
		<CalendarGrid 
		valid_dates={eventData.valid_dates}
		valid_times={eventData.valid_times}
		calendar_matrix={eventData.calendar_matrix}
		names_list={eventData.names_list}
		handleInputChange={handleInputChange}
		/>     
	</div>
)};

export default EventPage
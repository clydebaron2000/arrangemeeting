import React, {useEffect,useState} from 'react'
import { Link,Redirect,useParams } from 'react-router-dom'
import API from '../../utils/api'
import EventInfo from '../../components/EventInfo/'
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
	
	const handleCalendarChange=calendar_data=>{
		//update data
		let temp_data=eventData;
		temp_data.calendar_matrix=calendar_data.calendar_matrix
		temp_data.names_list=calendar_data.names_list
		const new_data=temp_data;
		setData(new_data);
	}
	
	useEffect(()=>{
		updateData(eventData)
		fetchDataBy_urlending(urlending)
	},[eventData]);
	//first fetch to iniitlaize page
	fetchDataBy_urlending(urlending)
	return (
	<div>
		{/* TODO: modify EventInfo to accomodate object */}
		<EventInfo title={eventData.description} description={eventData.description} handleInputChange={null}/>
		<button id='shareBtn'>Share this event link!</button>
		<CalendarGrid 
		valid_dates={eventData.valid_dates}
		valid_times={eventData.valid_times}
		calendar_matrix={eventData.calendar_matrix}
		names_list={eventData.names_list}
		handleInputChange={handleCalendarChange}
		/>     
	</div>
)};

export default EventPage
import React, {useEffect,useState} from 'react'
import { Link,Redirect,useParams } from 'react-router-dom'
import API from '../../utils/api'
import EventInfo from '../../components/EventInfo/EventInfo'
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
const EventPage = () => {
	const [eventData,setData]=useState({});
	const [currentUsername,setCurrentUserName]=useState({});
	const {url_end}=useParams();
	const [urlending,setUrl]=useState(url_end);
	const fetchDataBy_urlending=(url)=>{
		API.searchByURL(url).then(res=>{
		console.log(res.status,typeof res.status);
		if (res.status==400){//if not found
			return (<Redirect to='/'/>) // go to homepage
		}
		//checks of the data
		const raw_data=res.data;
		if (raw_data.url_end!=urlending){
			return (
				<div>Err: data recieved did not match data fetched`</div>
			)
		}
		if (raw_data.name==""||raw_data.name==undefined){
			return (
				<div>Err: Event title empty</div>
			)
		}
		const start_time=raw_data.valid_times.start;//number from 0 to 23.5
		const end_time=raw_data.valid_times.end;//number from 0 to 23.5
		const num_time_blocks=(end_time-start_time)/.5;
		if (raw_data.calendar_matrix.length==0){
			return (
				<div>Err: calendar_matrix empty</div>
			)
		}
		if (raw_data.calendar_matrix[0].length!=num_time_blocks){
			return (
				<div>Err: calendar_matrix does not have appropiate length</div>
			)
		}
		if (typeof(raw_data.valid_dates)!=typeof(new Date())){
			return (
			<div>Err: valid_dates does not have appropiate type: {typeof(raw_data.valid_dates)}</div>
			)
		}
		setData(raw_data);//otherwise, set data
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
		<EventInfo title={eventData.title} description={eventData.description} handleInputChange={null}/>
		<button id='shareBtn'>Share this event link!</button>
		<CalendarGrid 
			valid_dates={eventData.valid_dates}
			valid_times={eventData.valid_times}
			calendar_matrix={eventData.calendar_matrix}
			names_list={eventData.names_list}
			handleCalendarChange={handleCalendarChange}
		/>     
	</div>
)};

export default EventPage
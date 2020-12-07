import React, {useEffect,useState} from 'react'
import { Link,Redirect,useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import EventInfo from '../../components/EventInfo/EventInfo'
import './styles.css';
import AvailabilityChooser from '../../components/AvailabilityChooser/AvailabilityChooser';
import API from '../../utils/API'
function Demo_page(props){
    const [eventData,setData]=useState({});
	const {urlending}=useParams();//exctact the url ending from the location
	const [url_end,setUrl]=useState(`${urlending}`);
	const [currentUsername,setCurrentUserName]=useState({});
	const fetchDataBy_urlending=url=>{
		API.searchByURL(url).then(res=>{
		if (res.status===400){//if not found
			return (<Redirect to='/'/>) // go to homepage
		}
        // console.log('res.body',res.body)
        const raw_data=res.body;
		if (eventData!==raw_data){
			// console.log("data set!")
			console.log('raw data',raw_data)
			setData(raw_data);
		}
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
		updateData(eventData)
		fetchDataBy_urlending(url_end)
	}
	// first fetch to iniitlaize page
	fetchDataBy_urlending(url_end)
	// useEffect(()=>{
	// 	updateData(eventData)
	// 	fetchDataBy_urlending(url_end)
	// },[eventData]);

    return (
        <div>
					{/* <EventInfo title={eventData.title} description={eventData.description} handleInputChange={null}/> */}
            <div>Event: {eventData.name}</div>
            <div>description: {eventData.description}</div>
        {(eventData.valid_dates!==undefined)?    //to avoid reloading problems
			<AvailabilityChooser 
				valid_dates={eventData.valid_dates}
				valid_times={eventData.valid_times}
				calendar_matrix={eventData.calendar_matrix}
				names_list={eventData.names_list}
				handleCalendarChange={handleCalendarChange}
			/> :null }
        </div>
    )
}
    export default Demo_page
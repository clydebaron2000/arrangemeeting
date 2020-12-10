import React, {useEffect,useState} from 'react'
import { Redirect,useParams } from 'react-router-dom'
import './styles.css';
import AvailabilityChooser from '../../components/AvailabilityChooser/AvailabilityChooser';
import EventInfo from '../../components/EventInfo/EventInfo';
import API from '../../utils/api'
function Demo_page(props){
    const [eventData,setData]=useState({
		name:'',
		description:'',
		calendar_matrix:[]});//default vals
	const {urlending}=useParams();//exctact the url ending from the location
	const [url_end,setUrl]=useState(`${urlending}`);
	// const [currentUsername,setCurrentUserName]=useState({});
	const fetchDataBy_urlending=url=>{
		API.searchByURL(url).then(res=>{
		if (res.status===400){//if not found
			return (<Redirect to='/'/>) // go to homepage
		}
        // console.log('res.body',res.body)
        const raw_data=res.data[0];
		if (eventData!==raw_data){
			// console.log("data set!")
			console.log('raw data',raw_data)
			setData(raw_data);
		}
	})}
	const updateData=data=>{
		API.updateEvent(data);
	}
	
	const handleCalendarChange=calendar_data=>{
		//update data
		let temp_data=eventData;
		temp_data.calendar_matrix=calendar_data.calendar_matrix
		temp_data.names_list=calendar_data.names_list
		const new_data=temp_data;
		setData(new_data);
	}
	const handleInfoChange=obj=>{
		console.log('infochange')
		let temp_data=eventData
		temp_data.name=obj.title;
		temp_data.description=obj.description;
		console.log('t',temp_data);
		setUrl(obj.urlending)
		setData(temp_data)
		console.log('e',eventData);
		update()
	}
	// first fetch to iniitlaize page
	// fetchDataBy_urlending(url_end)
	const update=_=>{
		console.log('updating');
		updateData(eventData)
		fetchDataBy_urlending(url_end)
		console.log('recived',eventData)
	}
	useEffect(update,[eventData,url_end]);

    return (
        <div className="pageContent">
            {(eventData.valid_dates!==undefined)?<EventInfo
			title={eventData.name}
			description={eventData.description}
			urlending={url_end}
			handleInfoChange={handleInfoChange}
			/>:null
			}
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
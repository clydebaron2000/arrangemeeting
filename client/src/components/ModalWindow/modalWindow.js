import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import api from '../../utils/api';
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'


function Modal1() {
  const [show, setShow] = useState(false);
  //eslint-disable-next-line
  const [event, setEvent] = useState({
    name: "Name your event",
    description: "",
    valid_dates: [],
    valid_times: {
      start: 0,
      end: 0
    },
    calendar_matrix: [[[]]],
    url_end: "",
    created_by: ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//eslint-disable-next-line
  const handleInputChange = event => {
    setEvent(event.target.value);
  };

  
  const handleSubmit = () => {
    if((((startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24)) > 7) || (((startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24)) < -7)) {
      // if(false) {
      alert("Date range must be no longer than 7 days!");
    } else if((startDate.getTime() - endDate.getTime()) > 0) {
      alert("Start date must come before the end date!");
    } else if((startTime.getTime() - endTime.getTime()) > 0) {
      alert("Start time must come before the end time!");
    } else {
      
      //random url generator
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      //valid dates array creator
      var dates = [];
      for(var j = 0; j <= (-1 * ((startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24))); j++) {
        dates.push(new Date(moment(startDate).add(j, 'days').format('YYYY MM DD')));
      }
      //set up times object
      var tempStartTime = new Date(moment(startDate));
      tempStartTime.setHours(startTime.getHours());
      var tempEndTime = new Date(moment(startDate));
      tempEndTime.setHours(endTime.getHours());
      
      let flag = [[]];
      let end = tempEndTime;
      let start = tempStartTime;
      let time_block = 30*60000;
      console.log("End-Start: ",((end-start)/6000));
      let tempArray = [...Array(dates.length)].map(_ => [...Array(parseInt((end - start) / time_block))].map(_ => []));

      event.url_end = result;
      event.valid_dates = dates;
      event.valid_times.start = tempStartTime;
      event.valid_times.end = tempEndTime;
      event.calendar_matrix = tempArray;
      console.log(event);
      api.postEvent(event);
      window.location = '/event/' + result;
    }
  }
  const [startDate, setStartDate] = useState(new Date(moment().format('YYYY MM DD')));
  const [endDate, setEndDate] = useState(new Date(moment().add(7, 'days').format('YYYY MM DD')));
  const [startTime, setStartTime] = useState(new Date(moment().format('YYYY MM DD')));
  const [endTime, setEndTime] = useState(new Date(moment().format('YYYY MM DD')));




  return (
    <>
      <Button variant="outline-warning" className="modalButton" onClick={handleShow}>
        Create Event
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modalHeader">
          <Modal.Title className="modalTitle">Create your Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>{event.name}</p>
          <input
                className="form-control"
                type="text"
                placeholder="Event Name"
                name="name"
                onChange={e => event.name = e.target.value}
              />
          <p style={{ fontWeight: "bold" }}>Descritpion of event</p>
          <textarea 
            id="textareaID" 
            class="form-control"
            placeholder="Event Description"
            name="description"
            onChange={e => event.description = e.target.value}></textarea>
          <p style={{ fontWeight: "bold" }}>
            Select the date range for event availability</p>
            Start:<DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}


            /><br />
            
            End:<DatePicker
              selected={endDate}
              time
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}

              minDate={startDate}

            />
            <br /><p style={{ fontWeight: "bold" }}>
      Select the time range you would like for each day!</p>
      From:<DatePicker
              selected={startTime}
              onChange={date => setStartTime(date)}

              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            /><br />
     To : <DatePicker
              selected={endTime}
              onChange={date => setEndTime(date)}

              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" className="modalCloseBtn" onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default Modal1;
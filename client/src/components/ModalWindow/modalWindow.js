import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import api from '../../utils/api';
import 'react-datepicker/dist/react-datepicker.css'


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
    api.postEvent()
  }
  const [startDate, setStartDate] = useState(new Date(moment().format('YYYY MM DD')));
  const [endDate, setEndDate] = useState(new Date(moment().add(7, 'days').format('YYYY MM DD')));




  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Create Event Button
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="">Create your Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>Name of event</p>
          <textarea id="textareaID" class=" center-text form-control"></textarea>
          <p style={{ fontWeight: "bold" }}>Descritpion of event</p>
          <textarea id="textareaID" class="form-control"></textarea>
          <><p style={{ fontWeight: "bold" }}>
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
      Select the time range for event availability</p>
      From:<DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}

              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            /><br />
     To : <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}

              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />

          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default Modal1;


import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import api from '../../utils/api';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function Modal1() {
  const [show, setShow] = useState(false);
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

  const handleInputChange = event => {
    setEvent(event.target.value);
  };

  
  const handleSubmit = () => {
    api.postEvent()
  }

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
          <Modal.Title>{event.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
                className="form-control"
                type="text"
                placeholder="Name of Event"
                name="name"
                onChange={e => setEvent({name: e.target.value})}
              />
         <p>Descritpion of event</p>
        <textarea id="textareaID" class="form-control"></textarea>
        <>
        Select the Start of the Event<br/>
      {/* <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}      /><br/>
      Select the End of the Event<br/>
      <DatePicker
        selected={endDate}
        time
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}        minDate={startDate}      /> */}
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


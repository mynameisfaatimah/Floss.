import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { SymptomContext } from '../context/SymptomsContext'




function SymptomsForm(props) {
  const [painLevel, setPainLevel] = useState('');
  const [painLocation, setPainLocation] = useState('');
  const [painType, setPainType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [treatmentDescription, setTreatmentDescription] = useState('')
  const [treatmentName, setTreatmentName] = useState('')
  const { symptoms, setSymptoms} = useContext(SymptomContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const response = await axios.post(`${BASE_URL}/symptoms/`, {
      pain_level: painLevel,
      pain_location: painLocation,
      date: selectedDate
    });

     await axios.post(`${BASE_URL}/treatments/`, {
      symptom: response.data.id,
      treatment_name: treatmentName ,
      treatment_description: treatmentDescription ,
    });

    const getSymptoms = async () => {
      const res = await axios.get(`${BASE_URL}/symptoms/`)
      setSymptoms(res.data)
    }
    getSymptoms()
  };
  

  return (
    <Form onSubmit={handleSubmit} style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '80px', paddingBottom: '10px', color: 'white' }}>
        <h3>Symtoms Form</h3>
        <Form.Group controlId="formDate" style={{ paddingBottom: '10px' }}>
  <Form.Label>Date</Form.Label>
  <DatePicker
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    dateFormat="MM/dd/yyyy"
    isClearable
    placeholderText="Select a date"
  />
</Form.Group>

      <Form.Group controlId="formPainLevel" style={{paddingBottom: '10px'}}>
        <Form.Label>Pain Level</Form.Label>
        <Form.Control as="select" value={painLevel} onChange={(event) => setPainLevel(event.target.value)}>
         <option value="">Select Pain Level</option>
          <option value="M">Moderate</option>
          <option value="L">Mild</option>
          <option value="S">Severe</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPainLocation" style={{paddingBottom: '10px'}}>
        <Form.Label>Pain Location</Form.Label>
        <Form.Control as="select" value={painLocation} onChange={(event) => setPainLocation(event.target.value)}>
          
        <option value="">Select Pain Location</option>
          <option value="UF">Upper Jaw Front</option>
          <option value="UB">Upper Jaw Back</option>
          <option value="LF">Lower Jaw Front</option>
          <option value="LB">Lower Jaw Back</option>
          <option value="N">None</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPainType" style={{paddingBottom: '10px'}}>
        <Form.Label>Pain Type</Form.Label>
        <Form.Control as="select" value={painType} onChange={(event) => setPainType(event.target.value)}>
        <option value="">Select Type of Pain</option>
          <option value="T">Throbbing</option>
          <option value="A">Aching</option>
          <option value="BG">Bleeding Gums</option>
          <option value="SW">Swelling</option>
          <option value="TS">Temperature Sensitive</option>
          <option value="N">None</option>    
        </Form.Control>
      </Form.Group >
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>Treatment Name </Form.Label>
        <Form.Control type="text" placeholder="name of treatment" value={treatmentName} onChange={(event) => setTreatmentName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
        <Form.Label>Treatment Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={treatmentDescription} onChange={(event) => setTreatmentDescription(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default SymptomsForm;





















// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

// function SymptomForm() {
//   const [painLevel, setPainLevel] = useState("");
//   const [painLocation, setPainLocation] = useState("");
//   const [painType, setPainType] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formPainLevel">
//         <Form.Label>Pain Level</Form.Label>
//         <DropdownButton
//           variant="secondary"
//           title={painLevel || "Select pain level"}
//           onSelect={(eventKey) => setPainLevel(eventKey)}
//         >
//           <Dropdown.Item eventKey="M">Moderate</Dropdown.Item>
//           <Dropdown.Item eventKey="L">Mild</Dropdown.Item>
//           <Dropdown.Item eventKey="S">Severe</Dropdown.Item>
//         </DropdownButton>
//       </Form.Group>

//       <Form.Group controlId="formPainLocation">
//         <Form.Label>Pain Location</Form.Label>
//         <DropdownButton
//           variant="secondary"
//           title={painLocation || "Select pain location"}
//           onSelect={(eventKey) => setPainLocation(eventKey)}
//         >
//           <Dropdown.Item eventKey="UF">Upper Jaw Front</Dropdown.Item>
//           <Dropdown.Item eventKey="UB">Upper Jaw Back</Dropdown.Item>
//           <Dropdown.Item eventKey="LF">Lower Jaw Front</Dropdown.Item>
//           <Dropdown.Item eventKey="LB">Lower Jaw Back</Dropdown.Item>
//           <Dropdown.Item eventKey="N">None</Dropdown.Item>
//         </DropdownButton>
//       </Form.Group>

//       <Form.Group controlId="formPainType">
//         <Form.Label>Pain Type</Form.Label>
//         <DropdownButton
//           variant="secondary"
//           title={painType || "Select pain type"}
//           onSelect={(eventKey) => setPainType(eventKey)}
//         >
//           <Dropdown.Item eventKey="T">Throbbing</Dropdown.Item>
//           <Dropdown.Item eventKey="A">Aching</Dropdown.Item>
//           <Dropdown.Item eventKey="BG">Bleeding Gums</Dropdown.Item>
//           <Dropdown.Item eventKey="SW">Swelling</Dropdown.Item>
//           <Dropdown.Item eventKey="TS">Temperature Sensitive</Dropdown.Item>
//           <Dropdown.Item eventKey="N">None</Dropdown.Item>
//         </DropdownButton>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default SymptomForm;

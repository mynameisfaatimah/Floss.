import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { SymptomContext, TreatmentContext } from '../context/SymptomsContext'




function SymptomsForm() {
  const [painLevel, setPainLevel] = useState('');
  const [painLocation, setPainLocation] = useState('');
  const [painType, setPainType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [treatmentDescription, setTreatmentDescription] = useState('')
  const [treatmentName, setTreatmentName] = useState('')
  const {  setSymptoms} = useContext(SymptomContext)
  const { setTreatments} = useContext(TreatmentContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const response = await axios.post(`${BASE_URL}/symptoms/`, {
      pain_level: painLevel,
      pain_location: painLocation,
      date: selectedDate
    });

     await axios.post(`${BASE_URL}/treatments/`, {
      Symptom_id: response.data.id,
      treatment_name: treatmentName ,
      treatment_description: treatmentDescription ,
    });
    
    setPainLevel('');
  setPainLocation('');
  setPainType('');
  setSelectedDate(null);
  setTreatmentName('');
  setTreatmentDescription('');

    const getSymptoms = async () => {
      const res = await axios.get(`${BASE_URL}/symptoms/`)
      
      setSymptoms(res.data)
    }
    getSymptoms()

    const getTreatments = async () => {
      const res = await axios.get(`${BASE_URL}/treatments/`)
      console.log(res.data)
      setTreatments(res.data)
    }
    getTreatments()
  };
  

  return (
    <Form onSubmit={handleSubmit} style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '80px', paddingBottom: '10px', color: 'white' }}>
        <h3 className="text-center">Symtoms Form</h3>
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

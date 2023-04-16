import React,{ useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SymptomsForm from './SymptomsForm';
import TreatmentList from './TreatmentList';
import SymptomsList from './SymptomsList';
import { SymptomContext,  } from '../context/SymptomsContext';
import logo from '../assets/logo.png'

function Dashboard(props) {
  //const {  symptomsList ,treatments } = props;
  const [symptoms, setSymptoms] = useState([]);
  return (
    <>
     <div style={{ height: '150px' }}>
     <img
            src={logo}
            alt="Logo"
            style={{ width: "300px", display: "block", margin: "auto", alignItems:'center' }}
          />
        </div> 
    <Container fluid={true} style={{ body:'100vh', border: '1px solid black', backgroundColor: '#C3E8FF' }}>
      <Row>
      <SymptomContext.Provider value={{symptoms, setSymptoms}}>

        <Col md={6}>
          <SymptomsForm />
        </Col>
        <Col md={6}>
          <TreatmentList />
        </Col>
        {/* <Col md={6}>
        <SymptomsList />
        </Col> */}
         <Col md={6}>
        <SymptomsList />
        </Col> 
        </SymptomContext.Provider>

      </Row>

      <ul>
        {/*symptoms.map(symptom => (
          <li key={symptom.id}>{symptom.pain_level} - {symptom.pain_location}</li>
        ))*/}
      </ul> 

      {/* <h1>Treatments</h1>
      <ul>
        {treatments.map(treatment => (
          <li key={treatment.id}>{treatment.treatment_name} - {treatment.treatment_description}</li>
        ))}
      </ul> */}
    </Container>
    </>
  );
}

export default Dashboard;


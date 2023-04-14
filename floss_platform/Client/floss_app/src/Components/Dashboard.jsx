import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SymptomsForm from './SymptomsForm';
import TreatmentList from './TreatmentList';
import SymptomsList from './SymptomsList';

function Dashboard(props) {
  const { symptoms, treatments } = props;

  return (
    <>
    <Container fluid>
      <Row>
        <Col md={6}>
          <SymptomsForm />
        </Col>
        <Col md={6}>
          <TreatmentList />
        </Col>
      </Row>


      <SymptomsList symptoms={symptoms} />
      {/* <ul>
        {symptoms.map(symptom => (
          <li key={symptom.id}>{symptom.pain_level} - {symptom.pain_location}</li>
        ))}
      </ul> */}

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


import React,{ useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SymptomsForm from './SymptomsForm';
import TreatmentList from './TreatmentList';
import SymptomsList from './SymptomsList';
import { SymptomContext, TreatmentContext,  } from '../context/SymptomsContext';
import logo from '../assets/logo.png'

function Dashboard() {

  const [treatments, setTreatments] = useState([])
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
    <Container fluid={true} style={{ body:'100vh', border: '1px solid black', backgroundColor: '#C3E8FF', width: '100%'}}>
      <Row>
      <SymptomContext.Provider value={{symptoms, setSymptoms}}>
        <TreatmentContext.Provider value={{treatments, setTreatments}}>

        <Col md={6}>
          <SymptomsForm />
        </Col>
        <Col md={6}>
        <SymptomsList />
        </Col>
         <Col md={6}>
       
        <TreatmentList />
        </Col> 
        </TreatmentContext.Provider>
        </SymptomContext.Provider>

      </Row>


    </Container>
    </>
  );
}

export default Dashboard;


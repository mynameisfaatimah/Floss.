import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function TreatmentList() {
    const [treatments, setTreatments] = useState([]);
  
    // useEffect(() => {
    //   // Fetch treatments data from backend API
    //   fetch('/api/treatments/')
    //     .then(response => response.json())
    //     .then(data => setTreatments(data));
    // }, []);
  
    return (
      <ListGroup>
        {treatments.map(treatment => (
          <ListGroup.Item key={treatment.id}>
            <h5>{treatment.name}</h5>
            <p>{treatment.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  export default TreatmentList
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function TreatmentList() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Make a GET request to the treatment API endpoint and set the returned data to the treatments state
    fetch('/api/treatments/')
      .then(response => response.json())
      .then(data => setTreatments(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '80px', color: 'white'}}>
      <h3>Treatments</h3>
      <Table >
        <thead>
          <tr>
            <th>Symptom</th>
            <th>Treatment Name</th>
            <th>Treatment Description</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map(treatment => (
            <tr key={treatment.id}>
              <td>{treatment.Symptom.pain_location}</td>
              <td>{treatment.treatment_name}</td>
              <td>{treatment.treatment_description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TreatmentList;







// import React, { useState, useEffect } from 'react';
// import { ListGroup } from 'react-bootstrap';

// function TreatmentList() {
//     const [treatments, setTreatments] = useState([]);
  
//     // useEffect(() => {
//     //   // Fetch treatments data from backend API
//     //   fetch('/api/treatments/')
//     //     .then(response => response.json())
//     //     .then(data => setTreatments(data));
//     // }, []);
  
//     return (
//       <ListGroup>
//         {treatments.map(treatment => (
//           <ListGroup.Item key={treatment.id}>
//             <h5>{treatment.name}</h5>
//             <p>{treatment.description}</p>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     );
//   }
//   export default TreatmentList
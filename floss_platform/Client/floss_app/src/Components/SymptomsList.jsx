import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function SymptomList() {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    // Make a GET request to the symptom API endpoint and set the returned data to the symptoms state
    fetch('/api/symptoms/')
      .then(response => response.json())
      .then(data => setSymptoms(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Current Symptoms</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Pain Level</th>
            <th>Pain Location</th>
          </tr>
        </thead>
        <tbody>
          {symptoms.map(symptom => (
            <tr key={symptom.id}>
              <td>{symptom.date}</td>
              <td>{symptom.pain_level}</td>
              <td>{symptom.pain_location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SymptomList;

















// import React, { useState, useEffect } from 'react';
// import { ListGroup } from 'react-bootstrap';

// function SymptomList() {
//   const [symptoms, setSymptoms] = useState([]);

//   useEffect(() => {
//     // Make a GET request to the symptom API endpoint and set the returned data to the symptoms state
//     fetch('/api/symptoms/')
//       .then(response => response.json())
//       .then(data => setSymptoms(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>Current Symptoms</h1>
//       <ListGroup>
//         {symptoms.map(symptom => (
//           <ListGroup.Item key={symptom.id}>{symptom.pain_level} - {symptom.pain_location}</ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

// export default SymptomList;
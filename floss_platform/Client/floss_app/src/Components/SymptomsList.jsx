import React, {  useEffect, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { SymptomContext } from '../context/SymptomsContext';
import axios from 'axios';
import { BASE_URL } from '../constants'

function SymptomList() {

  const { symptoms, setSymptoms} = useContext(SymptomContext)


  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the symptom API endpoint with the ID of the symptom to delete
      const response = await axios.delete(`${BASE_URL}/symptoms/${id}/`);
      if (response.status === 204) {
        console.log(response)
        console.log('delete')
        // If the symptom is successfully deleted, update the symptoms state with the new list of symptoms
        const updatedSymptoms = symptoms.filter(symptom => symptom.id !== id);
        console.log(updatedSymptoms)
      
        setSymptoms(updatedSymptoms);
      }
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(()=>{
      const getSymptoms = async () => {
        const res = await axios.get(`${BASE_URL}/symptoms/`)
        console.log(res.data)
        setSymptoms(res.data)
      }
      getSymptoms()
    }, [setSymptoms])

  return (
    <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '20px', width: '520px', color:'white' }}>
      <h3>Current Symptoms</h3>
      
      <Table fluid="true" >
        <thead style={{color:'white'}}>
          <tr>
            <th>Date</th>
            <th>Pain Level</th>
            <th>Pain Location</th>
          </tr>
        </thead>
        <tbody style={{color:'white'}}>
          {symptoms.map(symptom => (
            <tr key={symptom.id}>
              <td>{new Date(symptom.date).toLocaleDateString("en-US")}</td>
              <td>{symptom.pain_level}</td>
              <td>{symptom.pain_location}</td>
              <td><button onClick={() => handleDelete(symptom.id)}>Delete</button></td>
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

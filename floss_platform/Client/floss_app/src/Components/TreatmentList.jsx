import React, {  useEffect,useContext } from 'react';
import { Table } from 'react-bootstrap';
import { BASE_URL } from '../constants';
import axios from 'axios';
import { TreatmentContext } from '../context/SymptomsContext';

function TreatmentList() {
  const {treatments, setTreatments} = useContext(TreatmentContext);

  useEffect(()=>{
    const getTreatments = async () => {
      const res = await axios.get(`${BASE_URL}/treatments/`)
      console.log(res.data)
      setTreatments(res.data)
    }
    getTreatments()
  }, [setTreatments])
  return (
    <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '80px', color: 'white'}}>
      <h3>Treatments</h3>
      <Table >
        <thead style={{ color:'white'}}>
          <tr>
            <th>Symptom</th>
            <th>Treatment Name</th>
            <th>Treatment Description</th>
          </tr>
        </thead>
        <tbody style={{ color:'white'}}>
          {treatments.map(treatment => (
            <tr key={treatment.id}>
              <td>{new Date(treatment.Symptom).toLocaleDateString("en-US")}</td>
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


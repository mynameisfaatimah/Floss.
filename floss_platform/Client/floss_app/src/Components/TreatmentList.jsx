import React, {  useEffect,useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BASE_URL } from '../constants';
import axios from 'axios';
import { TreatmentContext } from '../context/SymptomsContext';

function TreatmentList() {
  const {treatments, setTreatments} = useContext(TreatmentContext);

  const [updatedTreatment, setUpdatedTreatment] = useState({})

  const updateTreatment = async () => {
    const res = await axios.put(`${BASE_URL}/treatments/${updatedTreatment.id}/`, updatedTreatment);
    setUpdatedTreatment({});
    const getTreatments = async () => {
      const res = await axios.get(`${BASE_URL}/treatments/`)
      console.log(res.data)
      setTreatments(res.data)
    }
    getTreatments()
  };

  const cancelUpdate = () => {
    setUpdatedTreatment({});
  };

  useEffect(()=>{
    const getTreatments = async () => {
      const res = await axios.get(`${BASE_URL}/treatments/`)
      console.log(res.data)
      setTreatments(res.data)
    }
    getTreatments()
  }, [setTreatments])
  
  return (
    <div style={{ border: '1px solid black', backgroundColor: '#004C68', borderRadius: '10px', marginTop: '20px', color: 'white'}}>
      <h3 className="text-center">Treatments</h3>
      <Table fluid="true" className="table  table-hover">
        <thead style={{ color:'white'}}>
          <tr>
            <th>Symptom</th>
            <th>Treatment Name</th>
            <th>Treatment Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ color:'white', maxWidth:'100%'}}>
          {treatments.map(treatment => (
            <tr key={treatment.id} >
              <td >{new Date(treatment.Symptom).toLocaleDateString("en-US")}</td>
              <td>
                {updatedTreatment.id === treatment.id ? (
                  <input
                    type="text"
                    value={updatedTreatment.treatment_name}
                    onChange={(e) =>
                      setUpdatedTreatment({ ...updatedTreatment, treatment_name: e.target.value })
                    }
                  />
                ) : (
                  treatment.treatment_name
                )}
              </td>
              <td colSpan={3}>
                {updatedTreatment.id === treatment.id ? (
                  <input
                    type="text"
                    value={updatedTreatment.treatment_description}
                    onChange={(e) =>
                      setUpdatedTreatment({ ...updatedTreatment, treatment_description: e.target.value })
                    }
                  />
                ) : (
                  treatment.treatment_description
                )}
              </td>
              <td >
                {updatedTreatment.id == treatment.id ? 
              <button onClick={()=>updateTreatment()}>
                <button variant="secondary" onClick={cancelUpdate}>Cancel</button>
                Save
              </button> : 
              <button onClick={() =>
                setUpdatedTreatment(treatment)
              }>
                Edit
              </button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TreatmentList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Routes,  Route } from 'react-router-dom';
//import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Register from './Components/Register';
import Sidebar from './Components/Navbar';
import SymptomsForm from './Components/SymptomsForm';
//import { FaCarSide } from 'react-icons/fa';

function App() {
  const [symptoms, setSymptoms] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const BASE_URL = "http://localhost:8000"

  
    useEffect(()=>{
      const getSymptoms = async () => {
        const res = await axios.get(`${BASE_URL}/symptoms/`)
        console.log(res.data)
        setSymptoms(res.data)
      }
      getSymptoms()
    }, [])
    // useEffect(()=>{
    //   const getTreatments = async () => {
    //     const res = await axios.get(`${BASE_URL}/treatments/`)
    //     console.log(res.data)
    //     setTreatments(res.data)
    //   }
    //   getTreatments()
    // }, [])
    

  return (

        <Routes>
          <Route path="/" element={
            <div>
            <Sidebar/>
          <Dashboard symptoms={symptoms} treatments={treatments} />
          </div>
          }/>
          <Route
          path="/symptomsform" element={<SymptomsForm BASE_URL={BASE_URL}/>}
          />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      
    );
  }

export default App;















// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
// import Dashboard from './Components/Dashboard';
// import TreatmentList from './Components/TreatmentList';
// import SymptomsForm from './Components/SymptomsForm';
// import AboutUs from './Components/AboutUs';
// import Login from './Components/Login';
// import Navbar from './Components/Navbar';

// function App() {
//   const [symptoms, setSymptoms] = useState([]);
//   const [treatments, setTreatments] = useState([]);

//   useEffect(() => {
//     axios.get(`${BASE_URL}/symptoms/`)
//       .then(res => {
//         setSymptoms(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });

//     axios.get(`${BASE_URL}/treatments/`)
//       .then(res => {
//         setTreatments(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Dashboard} />
//           <Route path="/treatments" component={TreatmentList} />
//           <Route path="/symptoms" component={SymptomsForm} />
//           <Route path="/about-us" component={AboutUs} />
//           <Route path="/login" component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

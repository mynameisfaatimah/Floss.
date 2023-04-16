import { createContext } from 'react';

export const SymptomContext = createContext([]);

// export const SymptomProvider = ({ children }) => {
//   const [symptoms, setSymptoms] = useState([]);

//   const addSymptom = (symptom) => {
//     setSymptoms([...symptoms, symptom]);
//   };



//   return (
//     <SymptomContext.Provider value={{ symptoms, addSymptom }}>
//       {children}
//     </SymptomContext.Provider>
//   );
// };

//xport const useSymptoms = () => useContext(SymptomContext);

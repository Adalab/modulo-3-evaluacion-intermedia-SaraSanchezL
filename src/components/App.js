import '../styles/App.scss';
import {useState} from 'react';
import dataApi from '../data/data.json'
//import ls from '../services/localStorage'
//import DataApi from '../services/api'


function App() {

  const [data, setData] = useState(dataApi.results);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  })


  const handleInputAdd = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };
  const handleAddBtn = (ev) => {
    ev.preventDefault();
      setData([...data, newAdalaber]);
      setNewAdalaber({
        name: '',
        counselor: '',
        speciality: ''
      });
    };

 // Para key, en vez de id utilizamos index, al añadir datos nuevos utilizaran este index como key.
  const renderTable =
    data.map((adalaber, index) => 
 <tr key={index}>
 <td>{adalaber.name}</td>
 <td>{adalaber.counselor}</td>
 <td>{adalaber.speciality}</td>
 </tr>
);



  return (
    <div className="App">
      <h1>Adalabers</h1>
      <main>
      <table>
 <thead><tr>
 <th>Nombre</th>
 <th>Tutora</th>
 <th>Especialidad</th>
 </tr></thead>
 <tbody>
       {renderTable}    
       </tbody>
</table>

<form action="">
  <label htmlFor="name">Nombre</label>
  <input type="text" name="name" id="name" value={newAdalaber.name} onChange={handleInputAdd}/>
  <label htmlFor="counselor">Tutor</label>
  <input type="text" name="counselor" id="counselor" value={newAdalaber.counselor} onChange={handleInputAdd}/>
  <label htmlFor="speciality">Especialidad</label>
  <input type="text" name="speciality" id="speciality" value={newAdalaber.speciality} onChange={handleInputAdd}/>
  <button onClick={handleAddBtn}>Añadir nueva Adalaber</button>
</form>
       </main>

    </div>
  );
}

export default App;

import '../styles/App.scss';
import {useState, useEffect} from 'react';
import callToApi from '../services/api'
//import ls from '../services/localStorage'



function App() {

  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  })
  const [search, setSearch] = useState('');
  const [optionSelected, setOptionSelected] = useState('cualquiera');

  useEffect(() => {
    callToApi().then(response => {
      setData(response);
    });
  }, []);

  const handleSubmit = (ev) => ev.preventDefault();

  const handleSearchInput = (ev) => {
    setSearch(ev.currentTarget.value);
  }
  const handleSelect = (ev) => {
    setOptionSelected(ev.currentTarget.value);
  }

  const handleInputAdd = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };
  const handleAddBtn = (ev) => {
    ev.preventDefault();
    if (newAdalaber.name !== '') {
        setData([...data, newAdalaber]);
      setNewAdalaber({
        name: '',
        counselor: '',
        speciality: ''
      });
    } 
      setNewAdalaber({
        name: '',
        counselor: '',
        speciality: ''
      });

    };

 // Para key, en vez de id utilizamos index, al añadir datos nuevos utilizaran este index como key.
  const renderTable = data
  .filter(
    (oneAdalaber) =>
    oneAdalaber.name.toLowerCase().includes(search.toLowerCase()) ||
    oneAdalaber.counselor.toLowerCase().includes(search.toLowerCase())
  )
  /* .filter (
    (oneAdalaber) => 
  ) */
    .map((adalaber, index) => 
 <tr key={index}>
 <td className="eachTd">{adalaber.name}</td>
 <td className="eachTd">{adalaber.counselor}</td>
 <td className="eachTd">{adalaber.speciality}</td>
 </tr>
);



  return (
    <div className="App">
      <h1 className="title">Adalabers</h1>
      <main>
        <form onSubmit={handleSubmit} action="">
          <input type="text" name="search" id="search" placeholder="Buscar..." value={search} onChange={handleSearchInput}/>
          <select name="selectCounselor" id="selectCounselor" onChange={handleSelect} value={optionSelected}>
            <option value="cualquiera" disabled defaultValue>Cualquiera</option>
            <option value="yanelis">Yanelis</option>
            <option value="dayana">Dayana</option>
            <option value="ivan">Ivan</option>
          </select>
        </form>
      <table className="table">
 <thead><tr>
 <th className="eachTh"> Nombre</th>
 <th className="eachTh"> Tutora</th>
 <th className="eachTh"> Especialidad</th>
 </tr></thead>
 <tbody>
       {renderTable}    
       </tbody>
</table>

<form onSubmit={handleSubmit} className="form" action="">
  <label className="label" htmlFor="name">Nombre</label>
  <input className="input" type="text" name="name" id="name" placeholder="Nombre..."value={newAdalaber.name} onChange={handleInputAdd}/>
  <label className="label" htmlFor="counselor">Tutor</label>
  <input className="input" type="text" name="counselor" id="counselor" placeholder="Tutora..." value={newAdalaber.counselor} onChange={handleInputAdd}/>
  <label className="label" htmlFor="speciality">Especialidad</label>
  <input className="input" type="text" name="speciality" id="speciality" placeholder="Especialidad..."value={newAdalaber.speciality} onChange={handleInputAdd}/>
  <button className="btnAdd" onClick={handleAddBtn}>Añadir nueva Adalaber</button>
</form>
       </main>

    </div>
  );
}

export default App;

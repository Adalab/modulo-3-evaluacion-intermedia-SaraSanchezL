import "../styles/App.scss";
import { useState, useEffect } from "react";
import callToApi from "../services/api";

function App() {
  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  const handleSubmit = (ev) => ev.preventDefault();

  const handleInputAdd = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      [ev.currentTarget.id]: ev.currentTarget.value,
    });
  };

  const handleAddBtn = (ev) => {
    ev.preventDefault();
    if (newAdalaber.name !== "") {
      setData([...data, newAdalaber]);
    }
    setNewAdalaber({
      name: "",
      counselor: "",
      speciality: "",
    });
  };

  // Para key, en vez de id utilizamos index, al añadir datos nuevos utilizaran este index como key.
  const renderTable = data.map((adalaber, index) => (
    <tr key={index}>
      <td className="eachTd">{adalaber.name}</td>
      <td className="eachTd">{adalaber.counselor}</td>
      <td className="eachTd">{adalaber.speciality}</td>
    </tr>
  ));

  return (
    <div className="App">
      <header>
        <h1 className="title">Adalabers</h1>
      </header>

      <main>
        <table className="table">
          <thead>
            <tr>
              <th className="eachTh"> Nombre</th>
              <th className="eachTh"> Tutora</th>
              <th className="eachTh"> Especialidad</th>
            </tr>
          </thead>
          <tbody>{renderTable}</tbody>
        </table>

        <h2 className="title">Añadir una nueva adalaber</h2>

        <form onSubmit={handleSubmit} className="form" action="">
          <label className="label" htmlFor="name">
            Nombre
          </label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={newAdalaber.name}
            onChange={handleInputAdd}
          />
          <label className="label" htmlFor="counselor">
            Tutor
          </label>
          <input
            className="input"
            type="text"
            name="counselor"
            id="counselor"
            value={newAdalaber.counselor}
            onChange={handleInputAdd}
          />
          <label className="label" htmlFor="speciality">
            Especialidad
          </label>
          <input
            className="input"
            type="text"
            name="speciality"
            id="speciality"
            value={newAdalaber.speciality}
            onChange={handleInputAdd}
          />
          <button className="btnAdd" onClick={handleAddBtn}>
            Añadir nueva Adalaber
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;

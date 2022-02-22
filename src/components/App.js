import "../styles/App.scss";
import { useState, useEffect } from "react";
import adalabers from "../data/adalabers";
import ls from "../services/localStorage";
//import callToApi from "../services/api";

function App() {
  const [data, setData] = useState(ls.get("adalabers", adalabers.results));
  const [newAdalaber, setNewAdalaber] = useState(
    ls.get("newAdalaber", {
      name: "",
      counselor: "",
      speciality: "",
      social_networks: [],
    })
  );
  const [search, setSearch] = useState("");
  const [optionSelected, setOptionSelected] = useState("Cualquiera");

  /* API
    useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []); */

  useEffect(() => {
    ls.set("adalabers", data);
    ls.set("newAdalaber", newAdalaber);
  }, [data, newAdalaber]);

  const handleSubmit = (ev) => ev.preventDefault();

  const handleSearchInput = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleSelect = (ev) => {
    setOptionSelected(ev.currentTarget.value);
  };

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
      social_networks: [],
    });
  };

  const handleResetBtn = (ev) => {
    ev.preventDefault();
    setOptionSelected("Cualquiera");
    setSearch("");
  };

  const renderTable = data
    .filter((oneAdalaber) =>
      oneAdalaber.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (eachAdalaber) =>
        optionSelected === "Cualquiera" ||
        optionSelected === eachAdalaber.counselor
    )
    .map((adalaber, index) => (
      <tr key={adalaber.id || index}>
        <td className="eachTd">{adalaber.name}</td>
        <td className="eachTd">{adalaber.counselor}</td>
        <td className="eachTd">{adalaber.speciality}</td>
        {adalaber.social_networks.map((eachNetwork, index) => (
          <td className="eachTd" key={index}>
            <a
              className="link"
              href={eachNetwork.url}
              rel="noreferrer"
              target="_blank"
            >
              {eachNetwork.name}
            </a>
          </td>
        ))}
      </tr>
    ));

  return (
    <div className="App">
      <header>
        <h1 className="title">Adalabers</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="search" className="label">
            Buscar por Nombre:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Ej: MariCarmen"
            value={search}
            onChange={handleSearchInput}
          />
          <label className="label" htmlFor="selectCounselor">
            Selecciona Tutor/a:
          </label>
          <select
            name="selectCounselor"
            id="selectCounselor"
            onChange={handleSelect}
            value={optionSelected}
          >
            <option value="Cualquiera" disabled defaultValue>
              Cualquiera
            </option>
            <option value="Yanelis">Yanelis</option>
            <option value="Dayana">Dayana</option>
            <option value="Iván">Iván</option>
          </select>

          <button className="btnReset" onClick={handleResetBtn}>
            Reset
          </button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th className="eachTh"> Nombre</th>
              <th className="eachTh"> Tutora</th>
              <th className="eachTh"> Especialidad</th>
              <th className="eachTh"> Red Social</th>
            </tr>
          </thead>
          <tbody>{renderTable}</tbody>
        </table>

        <h2 className="titleAdd">Añadir nueva alumna</h2>

        <form onSubmit={handleSubmit} className="form" action="">
          <label className="label" htmlFor="name">
            Nombre*
          </label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre..."
            value={newAdalaber.name}
            onChange={handleInputAdd}
            required
          />
          <label className="label" htmlFor="counselor">
            Tutor/a
          </label>
          <input
            className="input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder="Tutora..."
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
            placeholder="Especialidad..."
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

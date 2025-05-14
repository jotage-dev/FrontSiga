import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProjetoCompleto() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getemployee')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }, [])

  const [filteredData, setFilteredData] = useState(data);
  const search = (e) => setFilteredData(data.filter((item) => item.nomeprojeto.includes(e.target.value)));
  console.log(data)


  return (
    <div className='fs-2 px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>CRONOGRAMA FÍSICO DO PROJETO</h3>
      </div>
      <div>
        <Link to="/" className='btn btn-warning px-5 g-5 me-2'>Dashboard</Link>
        <Link to="/fichaprojeto" className='btn btn-secondary'>Ficha do projeto</Link>
      </div>

      <div className='mt-3'>

        <div className="input-group mb-2 col">
          <span className="input-group-text bg-primary text-white" id="basic-addon1">Pesquisa estruturada</span>
          <input type="text"
            className="form-control"
            placeholder='Pesquisar pelo nome da projeto'
            autoComplete='off'
            onKeyUp={search} />
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Secretaria</th>
              <th>Nome do Projeto</th>
              <th>Gestor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((completo, index) => {
              return <tr key={index}>
                <td>{completo.id}</td>
                <td>{completo.secretaria}</td>
                <td>{completo.nomeprojeto}</td>
                <td>{completo.gestorprocesso}</td>
                <td>
                  <Link to={`/viewprojetocompleto/` + completo.id} className='btn btn-warning btn-sm me-2'>view</Link>
                  <Link to={`/gantt3/` + completo.id} className='btn btn-info btn-sm me-2'>gantt3</Link>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjetoCompleto
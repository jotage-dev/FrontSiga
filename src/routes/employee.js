import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getEmployee')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }

  
  //const[filteredData, setFilteredData] = useState(data);
  //const search = (e) => setFilteredData(data.filter((item) => item.secretaria.includes(e.target.value)));

// <div className="input-group mb-2 col">   
// <span className="input-group-text bg-primary text-white" id="basic-addon1">Pesquisa estruturada</span>
//     <input type="text"
//     className="form-control" 
//     placeholder='Pesquisar por secretaria - inicial maiúscula' 
//     autoComplete='off'
 //    onKeyUp={search} />
//</div>





  return (
    <div className='fs-1 px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>RELAÇÃO DE PROJETOS</h3>
      </div>
      <div>
        <Link to="/create" className='btn btn-primary  px-5 g-5 me-2'>Add Projeto</Link>
        <Link to="/" className='btn btn-dark  px-5 g-5 me-2'>Dashboard</Link>
      </div>
      
      <div className='mt-3'>

      


        <table className="table table-striped" id='myTable' >
          <thead>
            <tr>
              <th>Id</th>
              <th>Secretaria</th>
              <th>Nome do projeto</th>
              <th>Valor (R$)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.secretaria}</td>
                <td>{employee.nomeprojeto}</td>
                <td>{employee.valor.toLocaleString('pt-BR', {style:'currency', currency:"BRL"})}</td>
                <td>
                  <Link to={`/editemployee/` + employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
                  <button onClick={e => handleDelete(employee.id)} className='btn btn-sm btn-danger'>delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Employee() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/getSecretaria')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className='fs-2 px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>SECRETARIA E/OU ASSESSORIA</h3>
      </div>

      <div className='mt-3'>

        <table className="table table-striped" id='myTable' >
          <thead>
            <tr>
              <th>Secretaria/assessoria</th>
              <th>Secretário</th>
              <th>Formação</th>
              <th>Imagem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return <tr key={index}>
                <td>{employee.nomesecretaria}</td>
                <td>{employee.secretario}</td>
                <td>{employee.formacao}</td>
                <td>{employee.imagem}</td>
                <td>
                  <Link to={`/editsecretaria/` + employee.id} className='btn btn-primary btn-sm me-2'>edit</Link>
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
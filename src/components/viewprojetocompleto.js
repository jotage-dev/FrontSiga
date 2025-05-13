import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ViewProjetoCompleto() {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/getprojetocompleto')
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
                <h3>Duração do PROJETO</h3>
            </div>
            <div>
                <Link to="/employee" className='btn btn-warning px-5 g-5 me-2'>Retorna projeto</Link>
                <Link to="/fichaprojeto" className='btn btn-secondary'>Ficha do projeto</Link>
            </div>

            <div className='mt-3'>

            
            <table className="table table-borderless" id='myTable' >
                <thead>
                    <tr>
                        <th className="table-danger">Id</th>
                        <th className="table-danger">nomeprojeto</th>
                        <th className="table-danger">descricao</th>
                        <th className="table-danger">Início</th>
                        <th className="table-danger">Final</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((completo, index) => {
                        return <tr key={index}>
                            <td>{completo.id}</td>
                            <td>{completo.nomeprojeto}</td>
                            <td>{completo.descricao}</td>
                            <td>{completo.datainicioetapa1}</td>
                            <td>{completo.datafimetapa6}</td>
                        </tr>
                    })}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewProjetoCompleto
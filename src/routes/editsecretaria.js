import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import loginimg from '../images/logo.jpg';


function EditSecretaria() {
    const { id } = useParams();
    const [employee, setemployee] = useState({
        nomesecretaria: "",
        secretario: "",
        formacao: "",
        dataregistro: "",
        imagem: ""

    });
    const location = useLocation();
    const navigate = useNavigate();

    const employeeId = location.pathname.split("/")[2];
    //alert(employeeId);
    const handleChange = (e) => {
        setemployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        axios.get("http://localhost:3001/getsecret/" + id)
            .then(res => {
                console.log(res.data.Result[0])
                setemployee(res.data.Result[0]);
            })
            .catch(err => console.log(err))
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/update/${employeeId}`, employee);
            navigate("/employee");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="container">
            <h2>Alterar dados</h2>
            <div className="main-container">
                <div className='containerdashboardeditar'>

                    <div className="input-dividido">


                        <div className="col">
                            <img src={loginimg} alt="" width="200" height="200"></img>
                        </div>


                        <div className="col">
                            <label className="form-label">Id</label>
                            <input type="text"
                                className="form-control"
                                id="id"
                                name="id"
                                value={id} disabled />
                        </div>

                        <div className="col">
                            <label className="form-label">Secretaria</label>
                            <input type="text" className="form-control" placeholder='Digite o nome da secretaria' autoComplete='off'
                                name="nomesecretaria" value={employee.nomesecretaria} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Secretário</label>
                            <input type="text" className="form-control" placeholder="Digite o nome do projeto" autoComplete='off'
                                name="secretario" value={employee.secretario} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Formacao</label>
                            <input type="text" className="form-control" placeholder="Digite a descrição do projeto" autoComplete='off'
                                name="formacao" value={employee.formacao} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data do Registro</label>
                            <input type="text" className="form-control" placeholder="Digite a prioridade do projeto" autoComplete='off'
                                name="dataregistro" value={employee.dataregistro} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Imagem</label>
                            <input type="picture" className="form-control" placeholder="Digite a ficha do secretário" autoComplete='off'
                                name="imagem" value={employee.imagem} onChange={handleChange} />
                        </div>




                    </div>

                    <div className="col-12">
                        <button type="submit" className="submit-button" onClick={handleUpdate}>Alterar</button>
                    </div>
                </div>
            </div>
        </form>


    )
}

export default EditSecretaria
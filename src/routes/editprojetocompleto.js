import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";

function EditProjetoCompleto() {
    const { id } = useParams();

    const [projetocompleto, setProjetocompleto] = useState({
        secretaria: "",
        nomeprojeto: "",
        gestorprojeto: "",
        etapa1: "",
        datainicioetapa1: "",
        datafimetapa1: "",
        prazoetapa1: "",
        situacaoetapa1: "",
        etapa2: "",
        datainicioetapa2: "",
        datafimetapa2: "",
        prazoetapa2: "",
        situacaoetapa2: "",
        etapa3: "",
        datainicioetapa3: "",
        datafimetapa3: "",
        prazoetapa3: "",
        situacaoetapa3: "",
        etapa4: "",
        datainicioetapa4: "",
        datafimetapa4: "",
        prazoetapa4: "",
        situacaoetapa4: "",
        etapa5: "",
        datainicioetapa5: "",
        datafimetapa5: "",
        prazoetapa5: "",
        situacaoetapa5: "",
        etapa6: "",
        datainicioetapa6: "",
        datafimetapa6: "",
        prazoetapa6: "",
        situacaoetapa6: ""
    });

    const location = useLocation();
    const navigate = useNavigate();

    const projetocompletoId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setProjetocompleto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        axios.get("http://localhost:3001/getprojetocompl/" + id)
            .then(res => {
                console.log(res.data.Result[0])
                setProjetocompleto(res.data.Result[0]);

            })
            .catch(err => console.log(err))
    }, [id]);

    console.log(projetocompleto)

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/updateprojetocompleto/${projetocompletoId}`, projetocompleto);
            navigate("/projetocompleto");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <form className="container">
            <h2>Alterar cronograma do PROJETO</h2>
            <div className="main-container">
                <div className='containerdashboard'>

                    <div className="input-dividido">
                        <div className="col1">
                            <label className="form-label">Id</label>
                            <input type="text"
                                className="form-control"
                                id="id"
                                name="id"
                                value={id} disabled />
                        </div>

                        <div className="col">
                            <label className="form-label">Nome do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Nome do projeto'
                                autoComplete='off'
                                name="nomeprojeto"
                                value={projetocompleto.nomeprojeto} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Secretaria</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o nome do projeto'
                                autoComplete='off'
                                name="secretaria"
                                value={projetocompleto.secretaria} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Nome do gestor do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o nome do gestor do projeto'
                                name="gestorprojeto"
                                value={projetocompleto.gestorprojeto} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 1</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 1"
                                autoComplete='off'
                                name="etapa1"
                                value={projetocompleto.etapa1} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 1</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 1"
                                autoComplete='off'
                                name="datainicioetapa1"
                                id='datainicioetapa1'
                                value={projetocompleto.datainicioetapa1} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 1</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 1"
                                autoComplete='off'
                                name="datafimetapa1"
                                id="datafimetapa1"
                                value={projetocompleto.datafimetapa1} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa1"
                                id="calctempo"
                                value={projetocompleto.prazoetapa1} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa1"
                                value={projetocompleto.situacaoetapa1} onChange={handleChange} />
                        </div>
                    </div>


                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 2</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 2"
                                autoComplete='off'
                                name="etapa2"
                                value={projetocompleto.etapa2} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 2</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 2"
                                autoComplete='off'
                                name="datainicioetapa2"
                                value={projetocompleto.datainicioetapa2} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 2</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 2"
                                autoComplete='off'
                                name="datafimetapa2"
                                value={projetocompleto.datafimetapa2} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa2"
                                value={projetocompleto.prazoetapa2} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa2"
                                value={projetocompleto.situacaoetapa2} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 3</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 3"
                                autoComplete='off'
                                name="etapa3"
                                value={projetocompleto.etapa3} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 3</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 3"
                                autoComplete='off'
                                name="datainicioetapa3"
                                value={projetocompleto.datainicioetapa3} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 3</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 3"
                                autoComplete='off'
                                name="datafimetapa3"
                                value={projetocompleto.datafimetapa3} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa3"
                                value={projetocompleto.prazoetapa3} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa3"
                                value={projetocompleto.situacaoetapa3} onChange={handleChange} />
                        </div>
                    </div>


                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 4</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 4"
                                autoComplete='off'
                                name="etapa4"
                                value={projetocompleto.etapa4} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 4</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 4"
                                autoComplete='off'
                                name="datainicioetapa4"
                                value={projetocompleto.datainicioetapa4} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 4</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 4"
                                autoComplete='off'
                                name="datafimetapa4"
                                value={projetocompleto.datafimetapa4} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa4"
                                value={projetocompleto.prazoetapa4} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa4"
                                value={projetocompleto.situacaoetapa4} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 5</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 5"
                                autoComplete='off'
                                name="etapa5"
                                value={projetocompleto.etapa5} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 5</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 5"
                                autoComplete='off'
                                name="datainicioetapa5"
                                value={projetocompleto.datainicioetapa5} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 5</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 5"
                                autoComplete='off'
                                name="datafimetapa5"
                                value={projetocompleto.datafimetapa5} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa5"
                                value={projetocompleto.prazoetapa5} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa5"
                                value={projetocompleto.situacaoetapa5} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Etapa 6</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nome da etapa 6"
                                autoComplete='off'
                                name="etapa6"
                                value={projetocompleto.etapa6} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de início da etapa 6</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de início da etapa 6"
                                autoComplete='off'
                                name="datainicioetapa6"
                                value={projetocompleto.datainicioetapa6} onChange={handleChange} />
                        </div>
                        <div className="col">
                            <label className="form-label">Data de encerramento da etapa 6</label>
                            <input type="date"
                                className="form-control"
                                placeholder="Digite a data de encerramento da etapa 6"
                                autoComplete='off'
                                name="datafimetapa6"
                                value={projetocompleto.datafimetapa6} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-dividido">
                        <div className="col">
                            <label className="form-label">Prazo da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite o prazo da etapa do projeto'
                                name="prazoetapa6"
                                value={projetocompleto.prazoetapa6} onChange={handleChange} />
                        </div>

                        <div className="col">
                            <label className="form-label">Situação da etapa do projeto</label>
                            <input type="text"
                                className="form-control"
                                placeholder='Digite a situação da etapa do projeto'
                                name="situacaoetapa6"
                                value={projetocompleto.situacaoetapa6} onChange={handleChange} />
                        </div>
                    </div>


                    <div className='col'>
                        <button type="submit"
                            className="submit-button"
                            onClick={handleUpdate}>Alterar dados</button>
                    </div>


                </div>
            </div>
        </form >
    )
}

export default EditProjetoCompleto
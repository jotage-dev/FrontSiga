import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,

} from "chart.js";
import { Bar } from "react-chartjs-2";
import '../css/styles.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)



function Gantt() {
    const [totalprojeto, setTotalprojeto] = useState()
    const [valorprojeto, setValorprojeto] = useState()
    const [altaprioridade, setAltaprioridade] = useState()
    const [maiorvalorprojeto, setMaiorvalorprojeto] = useState()
    const [agricultura, setAgricultura] = useState()
    const [meioambiente, setMeioambiente] = useState()
    const [governo, setGoverno] = useState()
    const [obras, setObras] = useState()
    const [saeg, setSaeg] = useState()
    const [codesg, setCodesg] = useState()
    const [planejamento, setPlanejamento] = useState()
    const [saude, setSaude] = useState()
    const [educacao, setEducacao] = useState()
    const [seguranca, setSeguranca] = useState()
    const [esporte, setEsporte] = useState()
    const [cultura, setCultura] = useState()
    const [turismo, setTurismo] = useState()
    const [mulher, setMulher] = useState()
    const [defesacivil, setDefesaCivil] = useState()
    const [administracao, setAdministracao] = useState()



    axios.get('http://localhost:3001/totalprojeto')
        .then(res => {
            setTotalprojeto(res.data[0].id)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/valorprojeto')
        .then(res => {
            setValorprojeto(res.data[0].valor)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/altaprioridade')
        .then(res => {
            setAltaprioridade(res.data[0].alta)
        }).catch(err => console.log(err));

    axios.get('http://localhost:3001/maiorvalorprojeto')
        .then(res => {
            setMaiorvalorprojeto(res.data[0].maior)
        }).catch(err => console.log(err));



    useEffect(() => {

        axios.get('http://localhost:3001/agriculturavalor')
            .then(res => {

                setAgricultura(res.data[0].agro)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/meioambientevalor')
            .then(res => {
                setMeioambiente(res.data[0].meio)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/governovalor')
            .then(res => {
                setGoverno(res.data[0].governo)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/obrasvalor')
            .then(res => {
                setObras(res.data[0].obras)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/saegvalor')
            .then(res => {
                setSaeg(res.data[0].saeg)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/codesgvalor')
            .then(res => {
                setCodesg(res.data[0].codesg)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/planejamentovalor')
            .then(res => {
                setPlanejamento(res.data[0].planejamento)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/saudevalor')
            .then(res => {
                setSaude(res.data[0].saude)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/educacaovalor')
            .then(res => {
                setEducacao(res.data[0].educacao)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/segurancavalor')
            .then(res => {
                setSeguranca(res.data[0].seguranca)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/turismovalor')
            .then(res => {
                setTurismo(res.data[0].turismo)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/culturavalor')
            .then(res => {
                setCultura(res.data[0].cultura)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/esportevalor')
            .then(res => {
                setEsporte(res.data[0].esporte)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/mulherdevalor')
            .then(res => {
                setMulher(res.data[0].mulher)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/defesacivilvalor')
            .then(res => {
                setDefesaCivil(res.data[0].defesacivil)
            }).catch(err => console.log(err));

        axios.get('http://localhost:3001/administracaovalor')
            .then(res => {
                setAdministracao(res.data[0].administracao)
            }).catch(err => console.log(err));


    }, [])
    const data = {
        labels: ["Agricultura", "Obras", "Governo", "Meio Ambiente", "SAEG", "CODESG", "Planejamento", "Saúde", "Educação", "Segurança", "Turismo", "Esporte", "Cultura", "Mulher", "Defesa Civil", "Administração"],
        datasets: [
            {
                label: "Valor dos projetos por secretaria",
                data: [agricultura, obras, governo, meioambiente, saeg, codesg, planejamento, saude, educacao, seguranca, turismo, esporte, cultura, mulher, defesacivil, administracao],
                borderRadius: 5,
                backgroundColor: ['aqua'],
                borderColor: 'black',
                borderWidth: '1'
            }]
    }

    const options = {
        indexAxis: 'x',
        innerWidth: 400,

    }

    return (
        <main className="main-container">

            <div className='containerdashboard'>
                <h5>ESTRATIFICAÇÃO DO VALOR DOS PROJETOS POR SECRETARIA</h5>
                <div className='main-cards'>
                
                    
                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Número de Projetos</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total: {totalprojeto}</h5>
                        </div>
                    </div>
               
                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Valor estimado dos projetos</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>R$: {valorprojeto}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Número de projetos prioritários</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Total: {altaprioridade}</h5>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h5>Maior valor de um projeto</h5>
                        </div>
                        <hr />
                        <div>
                            <h5>Valor R$: {maiorvalorprojeto}</h5>
                        </div>
                    </div>
                </div>
            </div>



            <div className='containerdashboard'>
                <div className="Gra">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </main>
    );
};

export default Gantt
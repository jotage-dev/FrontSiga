import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend

} from "chart.js";
import 'chartjs-adapter-date-fns';
import {ptBR} from 'date-fns/locale';
import { Bar } from "react-chartjs-2";
import "./styles.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)



function Gantt4() {

    const { id } = useParams();
    const [prazoetapa1, setPrazoetapa1] = useState();
    const [prazoetapa2, setPrazoetapa2] = useState();
    const [prazoetapa3, setPrazoetapa3] = useState();
    const [prazoetapa4, setPrazoetapa4] = useState();
    const [prazoetapa5, setPrazoetapa5] = useState();
    const [prazoetapa6, setPrazoetapa6] = useState();
    const [nomeprojeto, setNomeprojeto] = useState();

    const [projetocompleto, setProjetocompleto] = useState({
        secretaria: "",
        nomeprojeto: "",
        gestorprojeto: "",
        etapa1: "",
        prazoetapa1: "",
        datainicioetapa1: "",
        datafimetapa1: "",
        etapa2: "",
        prazoetapa2: "",
        datainicioetapa2: "",
        datafimetapa2: "",
        etapa3: "",
        prazoetapa3: "",
        datainicioetapa3: "",
        datafimetapa3: "",
        etapa4: "",
        prazoetapa4: "",
        datainicioetapa4: "",
        datafimetapa4: "",
        etapa5: "",
        prazoetapa5: "",
        datainicioetapa5: "",
        datafimetapa5: "",
        etapa6: "",
        prazoetapa6: "",
        datainicioetapa6: "",
        datafimetapa6: "",
        situacao: ""
    });

    console.log(projetocompleto)

   
    useEffect(() => {
        axios.get("http://localhost:3001/getprojetocompl/" + id)
            .then(res => {
                console.log(res.data.Result[0])
                setProjetocompleto(res.data.Result[0]);
                setPrazoetapa1(res.data.Result[0].datainicioetapa1);
                setPrazoetapa2(res.data.Result[0].datainicioetapa2);
                setPrazoetapa3(res.data.Result[0].datainicioetapa3);
                setPrazoetapa4(res.data.Result[0].datainicioetapa4);
                setPrazoetapa5(res.data.Result[0].datainicioetapa5);
                setPrazoetapa6(res.data.Result[0].datainicioetapa6);
                setNomeprojeto(res.data.Result[0].nomeprojeto);
            })
            .catch(err => console.log(err))
    }, [id]);

    console.log(prazoetapa1, prazoetapa2, prazoetapa3, prazoetapa4, prazoetapa5, prazoetapa6)

   

    //const etapa0 = 0;



    //const etapas = ["1 - Estruturação do projeto", "2 - Elaboração do TdR/projeto e orçamento", "3 - Processo licitatório", "4 - Assinatura do contrato", "5 - Acompanhamento contratual", "6 - Prestação de contas e lições aprendidas"]
     
    const data = {

        //labels: etapas,
        datasets: [{
                label: "Cronograma de execução do projeto",
                data: [
                    {x:'2025-02-20', y:'Task1'}
                ],
                borderRadius: 5,
                backgroundColor: [
                    'rgba(255, 26, 104, 0.2',
                    'rgba(54, 162, 235, 0.2',
                    'rgba(255, 206, 86, 0.2',
                    'rgba(75, 192, 192, 0.2',
                    'rgba(153, 102, 255, 0.2',
                    'rgba(255, 159, 64, 0.2',
                ],
                borderColor: [
                    'rgba(255, 26, 104, 1',
                    'rgba(54, 162, 235, 1',
                    'rgba(255, 206, 86, 1',
                    'rgba(75, 192, 192, 1',
                    'rgba(153, 102, 255, 1',
                    'rgba(255, 159, 64, 1',
                ],
                borderWidth: '3',
                borderSkipped: false,
                barPercentage: 0.5,
                hoverBorderWidht: 5,
                hoverBorderColor: '#000',
            }],
    }

    const options = {
        indexAxis: 'y',
        adapters:{
            date:{
                locale:ptBR,
            

        LinearScale: {
            
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                }
            }, 
            min: '2025-01-01',
        }
    },
    }
    }

    const legend = {
        position: ['right'],
    }


    return (
        <main className="main-container">

            <div className='containerdashboard'>
                <h1> Nome do projeto: {nomeprojeto}</h1>
                <Link to="/projetocompleto" className='btn btn-info px-5 g-5 me-2'>Retorna projeto</Link>
            </div>

            <div className='containerdashboard'>
                <h5>GRÁFICO DE GANTT</h5>
                <div className="Gragrantt">
                    <Bar data={data} options={options} legend={legend} />
                </div>


            </div>


        </main>
    );
};

export default Gantt4
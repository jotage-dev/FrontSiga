import React from "react"
import axios, { formToJSON } from "axios"
import { useState } from "react"; 


function Perfil() {

    const [image, setImage] = useState();
    const [progressBar, setProgressBar] = useState(0);

    const handleFile = (event) => {
        const file = event.target.files[0];

        const formdata = new FormData();
        setImage(URL.createObjectURL(file));
        formdata.append('file', file);
        axios.post(`url`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: event => {
                setProgressBar(Math.round(100 * event.loaded) / event.total)
            }

        }).then(res => setImage(URL.createObjectURL(file)))
            .catch(err => console.log(err));
            console.log(formToJSON )
    }

    return (
        <div className="d-flex justify-content-center vh-100 bg-dark">
            <div className="bg-blue color-black p-5 rounded  w-50 vh-80">
                <label className="form-label">Conheça o Secretário</label>
                <input className="form-control form-control-lg" type="file" onChange={handleFile} />
                <br />   <br />
                <div className="progress">
                    <div className="progress-bar progress-bar-stripped progress-bar-animated"
                        role="progressbar" aria-label="progressbar" aria-valuenow={progressBar}
                        aria-valuemin="0" aria-valuemax="100" style={{ width: `${progressBar}%` }}>
                    </div>
                </div>
                <br />
                {
                    image &&
                    <img src={image} alt="imagem" className="w-75  h-75" />
                }
            </div>
        </div>

    )

}











export default Perfil
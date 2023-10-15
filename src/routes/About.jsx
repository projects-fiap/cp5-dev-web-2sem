import felipeH from '../assets/FelipeHeilmann.png'
import daniel from '../assets/DanielBarbosa.png'
import felipeV from '../assets/FelipeVoidela.png'
import carlos from '../assets/CarlosEduardo.png'
import acussena from '../assets/AçussenaMacedo.png'
import '../about.css'

export default function About() {
    return (
        <main className="bg-black container-fluid">
            <div className="row">
                <div className="d-flex justify-content-start row col-lg-12">
                    <h2 className="text-start text-white col-lg-12">Sobre a nossa equipe</h2>
                    <p className="text-start text-white fs-5 col-lg-11">essa é a equipe responsável pelo desenvolvimento do site.</p>
                </div>

                <div className="background-about col-lg-12 d-flex align-items-center">

                    <div className="col-lg-12 row d-flex justify-content-center ">

                        <div className="col-lg-2">
                            <img src={felipeH} alt="FelipeHeilmann" />
                            <p className="text-start text-white">Felipe Heilmann Marques</p>
                            <p className="text-start text-white">Backend - C# | NodeJS</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={daniel} alt="DanielBarbosa" />
                            <p className="text-start text-white">Daniel Barbosa Mariano</p>
                            <p className="text-start text-white">Frontend | Python Developer</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={felipeV} alt="FelipeVoidela" />
                            <p className="text-start text-white">Felipe Voidela Toledo</p>
                            <p className="text-start text-white">React | Bootstrap</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={carlos} alt="CarlosEduardo" />
                            <p className="text-start text-white">Carlos Eduardo Caramante </p>
                            <p className="text-start text-white">Backend - Java</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={acussena} alt="AçussenaMacedo" />
                            <p className="text-start text-white">Açussena Macedo Mautone</p>
                            <p className="text-start text-white">Ruby | Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
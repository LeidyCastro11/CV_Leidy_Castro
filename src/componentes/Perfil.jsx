import React from 'react' //Importar siempre react
import '../utils/CSS/Perfil.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'
import Whatsapp from '../utils/images/WhatsApp.jpg'
import Gmail from '../utils/images/Gmail.jpg'
import Github from '../utils/images/github.png'
import Perfilimg from '../utils/images/Perfil.jpg'
import {Link} from 'react-router-dom'

const Perfil = () => { //-----------------COMPONENTE MI PERFIL-----------------
    return (

        <div className="container_Perfil">
                <div className="ContainerImage">
                    <Link to="/">
                        <img src={Leidy} alt="Hola esta es Leidy" />
                    </Link>
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                    <p><a href="https://api.whatsapp.com/send?phone=573202291394&text=Hola!!%20"><img id="Wapp" src={Whatsapp} alt="WhatsApp"  /></a> 320 2291394</p>
                    <p><a href="https://mail.google.com/mail/u/0/#inbox"><img id="Wapp" src={Gmail} alt="Gmail" /></a> dayanacf3@gmail.com</p>
                    <p><a href="https://github.com/LeidyCastro11"><img id="Wapp" src={Github} alt="Github" /></a> LeidyCastro11</p>     
            </div>

            <div className="Descripcion">
                <div className="ContainerInfo">
                    <img src={Perfilimg} alt="imagen" />
                    <div className="DesPerfil">
                        <h2 className="Subtitulo"> Mi Perfil </h2>
                        <p>Hola, mi nombre es Leidy Castro, tengo 18 años, actualmente estoy realizando un tecnico para obtener mi certificación como desarrolladora Front-End. Me considero una persona amplia, con una creatividad sin limites, ideas innovaoras y muchas ganas de seguir aprendiendo cosas nuevas hacerca de la programación. </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Perfil;
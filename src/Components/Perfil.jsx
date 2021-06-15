import React from 'react' //Importar siempre react
import '../utils/CSS/Perfil.estilos.css'
import Leidy from '../utils/images/foto_perfil.jpg'

const Perfil = () => {
    return (

        <div className="container_Perfil">
                <div className="ContainerImage">
                    <img src={Leidy} alt="Hola esta es Leidy" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Leidy Dayana Castro Fajardo</h1>
                <p>320 2291394</p>
                <p>dayanacf3@gmail.com</p>
                <p>LeidyCastro11</p>   
            </div>

            <div className="Descripcion">
                <h2 className="Subtitulo"> Mi Perfil </h2>
                <p>Hola, mi nombre es Leidy Castro, tengo 18 años, actualmente estoy realizando un tecnico para obtener una certificacion como desarrolladora front end. Me considero una persona amplia, con una creatividad sin limites, ideas innovaoras y muchas ganas de seguir aprendiendo cosas nuevas hacerca de la programacion. </p>
                <p>Tengo conocimientos en HTML5, CSS3, Javascript junto con algo de librerias como React JS.  Me gusta intentar cosas nuevas, atreverme a hacer algo que aun no se si me salga como quiero, pero que no lo sabre hasta no hacerlo. 
                </p>
            </div>
        </div>
     )
}

export default Perfil;
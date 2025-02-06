import React from "react";
import Dashboard from './Dashboard.jsx';
import VoiceCommands from '../components/voice/VoiceCommands.jsx';
import Welcome from '../components/Welcome/Welcome.jsx';
import { Box } from "@mui/material";
//Pagina inicio del proyecto
const welcome = [
    //Informacion que se incluye en cada card
    {
        id: 0,
        title: '¡Bienvenidos!',
        imgurl: '/welcome.jpg',
        imgsize: 250,
        info: `En Kattelifé no somos una simple cafetería. Fusionamos el amor por los gatos con la pasión por el café.
               Somos un refugio, un hogar temporal y un lugar lleno de amor para nuestros amigos felinos.
               Nuestra página funciona con comandos de voz. Si es la primera vez que nos visitas, te recomendamos decir: "Mostrar Ayuda".`
    },
    {
        id: 1,
        title: '¿Qué significa Kattelifé?',
        imgurl: '/name.jpg',
        imgsize: 250,
        info: `"Katte" proviene del noruego y significa gato.
               "Life" representa la vida y la oportunidad que les brindamos a los gatos que acogemos.
               "Fé" hace referencia al café, el corazón de nuestra cafetería.`
    },
    {
        id: 2,
        title: 'Nuestro Objetivo',
        imgurl: '/obj.jpg',
        imgsize: 250,
        info: `Todos los gatos que nos acompañan en este espacio están esperando encontrar una familia que los adopte y les brinde una vida llena de cariño.
              Si eres una persona responsable y los gatos ocupan un lugar especial en tu corazón, esta podría ser tu oportunidad para cambiar una vida.
              Si sientes esa conexión, ¡háznoslo saber!`
    },
    {
        id: 3,
        title: '¡Ojo!',
        imgurl: '/relax.jpg',
        imgsize: 250,
        info: `Queremos recordarte que, aunque los gatos son seres curiosos y cariñosos, es importante respetar su espacio y no someterlos a situaciones estresantes.
              Ellos también están aquí para disfrutar de tu compañía en un ambiente tranquilo y relajado.`
    },
    {
        id:4,
        title:'Ven a conocernos',
        imgurl:'/exterior.JPG',
        imgsize: 250,
        info:`Te esperamos en San Fernando, en Calle Plácido Domingo nº12C.
              Abrimos Lunes-Sábados de 10:00-16:00/ 18:30-22:30 h.
              Disfruta de la experiencia en la única cafetería gatuna de la isla. ¡Te damos la bienvenida a nuestro mundo felino!`
    }
];

function Home() {
    return (
        <>
            {/*Mostrar dashboard y comandos de voz*/}
            <Dashboard />
            <VoiceCommands />
            {/*Imagen de fondo*/}
            <Box
                sx={{
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    padding: 2,
                }}
            >
                {/*Mapear el objeto welcome*/}
                {welcome.map(w => (
                    <Welcome
                        key={w.id}
                        title={w.title}
                        imgurl={w.imgurl}
                        imgsize={w.imgsize}
                        info={w.info}
                    />
                ))}
            </Box>
        </>
    );
}

export default Home;
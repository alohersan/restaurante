import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import Help from "../Help/Help.jsx";
//Componente de voz utilizado en todas las páginas
//Se pasan como parametros de las paginas reservas y help
const VoiceCommands = ({ setData, data, setOpen }) => {
    //Controlar la navegacion entre paginas
    const navigate = useNavigate();

    //Controlar el estado del dialogo modal con los comandos de ayuda
    const [helpOpen, setHelpOpen] = useState(false);

    //Comandos reconocidos
    const commands = [
        {
            command: "Navegar a *",
            callback: (page) => handleNavigation(page),
        },
        {
            command: "Reserva el * de * de *",
            callback: (day, month, year) => handleDay(day, month, year),
        },
        {
            command: "A las *:*",
            callback: (hour, minute) => handleTime(hour, minute),
        },
        {
            command: "Para * personas",
            callback: (numpeople) => handlePeople(numpeople),
        },
        {
            command: "A nombre de *",
            callback:(name)=>handleName(name),
        },
        {
            command: "Enviar datos",
            callback: () => handleSubmitReservation(),
        },
        {
            command: "Confirmar",
            callback: () => handleConfirmation(),
        },
        {
            command: "Corregir",
            callback: () => setOpen(false),
        },
        {
            command: "Bajar página",
            callback: () => handleScrollDown(),
        },
        {
            command: "Subir página",
            callback: () => handleScrollUp(),
        },
        {
            command: "Mostrar Ayuda",
            callback: () => setHelpOpen(true),
        },
        {
            command: "Entendido",
            callback: () => setHelpOpen(false),
        },
    ];

    // Configuración del reconocimiento de voz
    const { listening, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

    //Iniciar el reconocimiento de voz al abrir el proyecto
    // El objetivo es no usar el raton durante el uso del proyecto, por ello esta siempre escuchando
    useEffect(() => {
        if (browserSupportsSpeechRecognition) {
            SpeechRecognition.startListening({ continuous: true }); // Escucha continua
        }
    }, [browserSupportsSpeechRecognition]);

    // Si el navegador no soporta reconocimiento de voz
    if (!browserSupportsSpeechRecognition) {
        return <span>El navegador no soporta reconocimiento de voz.</span>;
    }

    // Manejar la navegación
    const handleNavigation = (page) => {
        switch (page.toLowerCase()) {
            case "inicio":
                navigate("/");
                break;
            case "carta":
                navigate("/carta");
                break;
            case "reservas":
                navigate("/reservas");
                break;
            default:
                console.log("Página no encontrada");
        }
    };

    // Manejar la fecha de la reserva
    const handleDay = (day, month, year) => {
        //En caso de que se digan los meses como numeros los formatea
        const monthNames = {
            enero: "01",
            febrero: "02",
            marzo: "03",
            abril: "04",
            mayo: "05",
            junio: "06",
            julio: "07",
            agosto: "08",
            septiembre: "09",
            octubre: "10",
            noviembre: "11",
            diciembre: "12",
        };
        const formattedMonth = monthNames[month.toLowerCase()];
        const date = `${year}-${formattedMonth}-${day}`;
        setData(prevData=>({...prevData,day: date }));
        console.log(`Día seleccionado: ${date}`);
    };

    // Manejar la hora de la reserva
    const handleTime = (hour, minute) => {
        const time = `${hour}:${minute}`;
        setData(prevData=>({...prevData,  hour: time }));
        console.log(`Hora seleccionada: ${time}`);
    };

    // Manejar el número de personas
    const handlePeople = (numpeople) => {
        setData((prevData) => ({ ...prevData, people: numpeople }));
        console.log(`Reserva para ${numpeople} personas`);
    };

    //Manejar el nombre de la reserva
    const handleName=(name)=>{
        setData((prevData)=>({...prevData, name: name }));
        console.log(`Reserva a nombre de ${name} `);
    }

    // Enviar los datos de la reserva y abrir el dialogo de confirmacion
    const handleSubmitReservation = () => {
        if (data.day && data.hour && data.people&&data.name) {
            setOpen(true);
            console.log(`${data.name} ha hecho una reserva para el ${data.day} a las ${data.hour} para ${data.people} personas.`);
        } else {
            console.log("Faltan datos para confirmar la reserva");
        }
    };

    // Confirmar la reserva y vaciar los campos del formulario
    const handleConfirmation = () => {
        setOpen(false);
        setData({
            day: "",
            hour: "",
            people: "",
            name:""
        });
        console.log("Reserva confirmada");
    };

    // Bajar página
    const handleScrollDown = () => {
        window.scrollBy(0, window.innerHeight);
        console.log("Desplazando la página hacia abajo");
    };

    // Subir página
    const handleScrollUp = () => {
        window.scrollBy(0, -window.innerHeight);
        console.log("Desplazando la página hacia arriba");
    };

    return (
        <>
            {/*Componente con comandos de ayuda*/}
            <Help open={helpOpen} handleClose={() => setHelpOpen(false)} />
        </>
    );
};

export default VoiceCommands;
import React, {useState} from "react";
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Dashboard from './Dashboard.jsx';
import VoiceCommands from '../components/voice/VoiceCommands.jsx';
import SendIcon from '@mui/icons-material/Send';
//Pagina reservas del proyecto
function Reservas() {
    //Variables del formulario
    const [data, setData] = useState({
        day: '',
        hour: '',
        people: '',
        name:''
    });
    //Manejo del estadpo del dialogo modal
    const [open, setOpen] = useState(false);

    //Establecer el dia de la reserva
    const handleChangeDay = (e) => {
        setData({...data, day: e.target.value});
    };

    //Establecer la hora de la reserva
    const handleChangeHour = (e) => {
        setData({...data, hour: e.target.value});
    };

    //Establecer el nº de personas de la reserva
    const handleChangePeople = (e) => {
        setData({...data, people: e.target.value});
    };

    //Establecer el nombre de la reserva
    const handleChangeName=(e)=>{
        setData({...data, name:e.target.value})
    }

    //Cerrar el dialogo modal
    const handleClose = () => {
        setOpen(false);
    };

    //Función del botón enviar datos
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    //Confirmar datos
    const handleConfirm = () => {
        console.log(data);
        setOpen(false);
    };

    return (
        <>
            {/*Mostrar el dashboard*/}
            <Dashboard/>
            {/*Se pasa como parámetros los datos que recoge el microfono para mostrarlos en el formulario*/}
            {/*También se manipula el estado del dialogo*/}
            <VoiceCommands setData={setData} data={data} setOpen={setOpen}/>
            {/*Establecer como fondo una imagen*/}
            <Box
                sx={{
                    backgroundImage: "url('/background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container
                    maxWidth="sm"
                    sx={{
                        backgroundColor: '#f1e3c0',
                        padding: '2rem',
                        borderRadius: '8px',
                    }}
                >
                    <Box component='form' onSubmit={handleSubmit} sx={{width: '100%',backgroundColor:'#f1e3c0'}}>
                        {/*Titulo del formulario*/}
                        <Typography
                            variant='h4'
                            color={"#ee6d1f"}
                            sx={{
                                mb: 2,
                                textAlign: 'center',
                                fontFamily: 'Courier New, monospace',
                                fontWeight: 'bold'
                            }}
                        >
                            Haga su reserva
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/*Dia*/}
                                <TextField
                                    required
                                    variant='outlined'
                                    type='date'
                                    fullWidth
                                    value={data.day}
                                    onChange={handleChangeDay}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/*Hora*/}
                                <TextField
                                    required
                                    type='time'
                                    variant='outlined'
                                    fullWidth
                                    value={data.hour}
                                    onChange={handleChangeHour}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                {/*Nº de personas(En un principio era type=number, pero a veces el comando de voz reconoce los numeros como 8 y otras como 8, asi que para evitar errores lo deje como texto*/}
                                <TextField
                                    required
                                    variant='outlined'
                                    fullWidth
                                    value={data.people}
                                    onChange={handleChangePeople}
                                    label="Número de personas"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/*Nombre*/}
                                <TextField
                                    required
                                    variant='outlined'
                                    fullWidth
                                    value={data.name}
                                    onChange={handleChangeName}
                                    label="Nombre"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mt: 2}}>
                            <Grid item xs={12}>
                                {/*Boton para enviar los datos*/}
                                <Button fullWidth variant="contained" endIcon={<SendIcon/>}
                                        sx={{color:'#000000',fontFamily: 'Courier New, monospace',fontWeight:'bold'}} color={'warning'} type="submit">
                                    Enviar Datos
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            {/*Dialogo modal*/}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Datos de su reserva</DialogTitle>
                <DialogContent>
                    {/*Mensaje con los datos de la reserva*/}
                    <Typography>
                        {data.name} ha hecho una reserva para el {data.day} a las {data.hour} para {data.people} personas.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Corregir</Button>
                    <Button onClick={handleConfirm} >Confirmar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Reservas;
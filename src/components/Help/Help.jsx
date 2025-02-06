import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

//Componente con el listado de comandos de la aplicación
//Se usan los parametros que se pasan a los comandos de voz
function Help({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle sx={{fontFamily: 'Courier New, monospace',fontWeight:'bold'}}>Comandos</DialogTitle>
            <DialogContent>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Navegar entre páginas: Navegar a (nombre de la página)
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}} >
                    Deslizar la página hacia abajo: Bajar página
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Deslizar la página hacia arriba: Subir página
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                   Elegir el día de la reserva: Reserva el (dia) de (mes) de (año)
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Elegir la hora de la reserva: A las (hora):(minutos)
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Elegir el número de personas: Para (nº de personas) personas
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Nombre de la persona que reserva:A nombre de (nombre)
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Enviar los datos: Enviar datos
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Corregir los datos: Corregir
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Confirmar los datos: Confirmar
                </Typography>
                <Typography sx={{fontFamily: 'Courier New, monospace'}}>
                    Cerrar el diálogo de ayuda: Entendido
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Entendido</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Help;
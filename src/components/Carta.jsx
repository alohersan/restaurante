import React from "react";
import Card from "@mui/material/Card";
import {CardContent, CardHeader, CardMedia, Typography,  Avatar} from "@mui/material";
//Componente carta donde se crear el card con los datos

const Carta = ({ nombre, imgurl, imgsize, ingredientes, precio }) => {
    return (
        <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            {/*Header con logo del restaurante, nombre del plato y precio*/}
            <CardHeader
                sx={{ textAlign: "center", backgroundColor: "#ee6d1f" }}
                avatar={<Avatar alt={'Gato con delantal'} src={'/waitercat.png'} />}
                title={
                    <Typography variant="h5" sx={{fontFamily: "Courier New, monospace",fontWeight: 'bold'}} >
                        {nombre}
                    </Typography>
                }
                subheader={
                    <Typography variant="body1" sx={{fontFamily: "Courier New, monospace"}} >
                        {precio}
                    </Typography>
                }
            />
            {/*Imagen*/}
            <CardMedia
                component={"img"}
                image={imgurl}
                alt={nombre}
                style={{
                    height: imgsize,
                    objectFit: "contain",
                }}
            />
            {/*Ingredientes del plato o distintas opciones de ese plato*/}
            <CardContent style={{ height: "100%",textAlign: "center", backgroundColor: "#f1e3c0" }}>
                        <Typography
                            color="#000000"
                            style={{
                                textAlign: "center",
                                fontFamily: "Courier New, monospace",
                            }}
                        >
                            {ingredientes}
                        </Typography>
            </CardContent>
        </Card>
    );
};

export default Carta;
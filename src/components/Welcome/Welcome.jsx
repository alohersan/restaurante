import React from "react";
import Card from "@mui/material/Card";
import {CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
//Componente welcome con el card que muestra los datos de home
const Welcome = ({title, imgurl, imgsize, info}) => {
    return (
        <Card style={{width: "55%", height: "100%", display: "flex", flexDirection: "column"}}>
            {/*Nombre de la seccion*/}
            <CardHeader
                sx={{textAlign: "center", backgroundColor: "#ee6d1f"}}
                title={
                    <Typography variant="h5" sx={{fontFamily: "Courier New, monospace", fontWeight: 'bold'}}>
                        {title}
                    </Typography>
                }
            />
            {/*Imagen */}
            <CardMedia
                component={"img"}
                image={imgurl}
                style={{
                    width: "100%",
                    height: imgsize,
                    objectFit: "contain",
                    margin: "auto",
                }}
            />
            {/*Informacion*/}
            <CardContent style={{height: "100%", textAlign: "center", backgroundColor: "#f1e3c0"}}>
                <Typography
                    color="#000000"
                    style={{
                        textAlign: "center",
                        fontFamily: "Courier New, monospace",
                        whiteSpace: "pre-line",
                    }}
                >
                    {info}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Welcome;
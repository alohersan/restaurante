import Carta from '../Carta.jsx'
import Dashboard from "../Dashboard.jsx";
import VoiceCommands from "../voice/VoiceCommands.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//Cargar la informacion posteriormente renderizada en cada card
const carta=[
    {
        id:0,
        nombre:'Pan con Alioli',
        imgurl:'/panalioli.jpg',
        imgsize:250,
        ingredientes:'Pan, alioli',
        precio:'0.50€'
    },
    {
        id:1,
        nombre:'Papas Fritas',
        imgurl:'/papasfritas.jpg',
        imgsize:250,
        ingredientes:'Salsas: Ketpchup/ Mayonesa/ Alioli',
        precio:'2.00€'
    },
    {
        id:2,
        nombre:'Papas Arrugadas con Mojo',
        imgurl:'/papasmojo.jpg',
        imgsize:250,
        ingredientes:'Papas arrugadas, mojo picón',
        precio:'3.50€'
    },
    {
        id:3,
        nombre:'Café con Leche',
        imgurl:'/cafeleche.jpg',
        imgsize:250,
        ingredientes:'Normal / Leche Condensada / XL',
        precio:'1.70€'
    },
    {
        id:4,
        nombre:'Americano',
        imgurl:'/cafeamericano.jpg',
        imgsize:250,
        ingredientes: '',
        precio:'1.50€'
    },
    {
        id:5,
        nombre:'Café con Hielo',
        imgurl:'/cafhielo.jpeg',
        imgsize:250,
        ingredientes: '',
        precio:'1.50€'
    },
    {
        id:6,
        nombre:'Cortado',
        imgurl:'/decafcortado.jpg',
        imgsize:250,
        ingredientes: 'Espresso, leche',
        precio:'1.50€'
    },
    {
        id:7,
        nombre:'Agua sin gas',
        imgurl:'/aguasingas.jpg',
        imgsize:250,
        ingredientes: '',
        precio:'1.40€'
    },
    {
        id:8,
        nombre:'Agua con gas',
        imgurl:'/aguacongas.jpg',
        imgsize:250,
        ingredientes: '',
        precio:'1.50€'
    },
    {
        id:9,
        nombre:'Chocolate caliente',
        imgurl:'/chocolatecaliente.jpg',
        imgsize:250,
        ingredientes: 'Chocolate,nubes',
        precio:'3.00€'
    },
    {
        id:10,
        nombre:'Coca cola',
        imgurl:'/cocacola.jpg',
        imgsize:250,
        ingredientes: 'Light / Zero',
        precio:'2.00€'
    },
    {
        id:11,
        nombre:'Fanta',
        imgurl:'/fantanaranja.jpg',
        imgsize:250,
        ingredientes: 'Limón / Naranja',
        precio:'1.50€'
    },
    {
        id:12,
        nombre:'Zumo pequeño',
        imgurl:'/zumo.jpg',
        imgsize:250,
        ingredientes: 'Melocotón / Manzana / Naranja',
        precio:'2.30€'
    },
    {
        id:13,
        nombre:'Nestea',
        imgurl:'/nestea.jpg',
        imgsize:250,
        ingredientes: 'Limón / Mango / Piña',
        precio:'2.30€'
    },
    {
        id:14,
        nombre:'Té verde',
        imgurl:'/teverde.jpg',
        imgsize:250,
        ingredientes: '',
        precio:'1.90€'
    },
    {
        id:15,
        nombre:'Jamón Serrano',
        imgurl:'/quesojamonserrano.jpg',
        imgsize:250,
        ingredientes: 'Jamón Serrano / Queso Tierno',
        precio:'2.70€'
    },
    {
        id:16,
        nombre:'Ternera',
        imgurl:'/pepitoternera.jpg',
        imgsize:250,
        ingredientes: 'Pan, ternera, lechuga, tomate,alioli',
        precio:'3.00€'
    },
    {
        id:17,
        nombre:'Lomo de cerdo',
        imgurl:'/bocadillolomo.jpg',
        imgsize:250,
        ingredientes: 'Pan, lomo de cerdo, lechuga, tomate,alioli',
        precio:'3.00€'
    },
    {
        id:18,
        nombre:'Calamares',
        imgurl:'/bocadillocalamares.jpg',
        imgsize:250,
        ingredientes: 'Pan, calamares, lechuga, tomate,alioli',
        precio:'3.40€'
    },
    {
        id:19,
        nombre:'Tortilla Española',
        imgurl:'/bocadillotortilla.jpg',
        imgsize:250,
        ingredientes: 'Pan, tortilla',
        precio:'2.70€'
    },
    {
        id:20,
        nombre:'Mixto',
        imgurl:'/sandwichmixto.jpg',
        imgsize:250,
        ingredientes: 'Jamón, queso',
        precio:'2.10€'
    },
    {
        id:21,
        nombre:'Vegetal',
        imgurl:'/sandvegetal.jpg',
        imgsize:250,
        ingredientes: 'Sandwich, atun, mayonesa,lechuga, tomate',
        precio:'2.30€'
    },
    {
        id:22,
        nombre:'Hamburguesa pollo',
        imgurl:'/hambpollo.png',
        imgsize:250,
        ingredientes: 'Pan de semillas ,pechuga de pollo,lechuga,tomate,cebolla',
        precio:'5.00€'
    },
    {
        id:23,
        nombre:'Hamburguesa Ternera',
        imgurl:'/hamburguesa.jpg',
        imgsize:250,
        ingredientes:'Pan de semillas,ternera,lechuga,tomate,cebolla',
        precio:'6.00€'
    }
]
function Comida() {
    return (
        <>
            {/*Dashboard y comandos de voz*/}
            <Dashboard />
            <VoiceCommands />
            {/*Box con informacion para los usuarios*/}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            <Box sx={{ width: '100%', padding: '1rem' }}>
                <Typography
                    variant="h6"
                    color="#000000"
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Courier New, monospace',
                        backgroundColor: '#ee6d1f',
                        fontWeight: 'bold'
                    }}
                >
                    IMPORTE DE ENTRADA
                </Typography>
                <Typography
                    variant="h6"
                    color="#000000"
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Courier New, monospace',
                        backgroundColor:'#f1e3c0'
                    }}
                >
                    Con el fin de asegurar el bienestar de los felinos, para entrar al local se deberá abonar 3€.<br/>
                    Esto incluirá la consumición de una bebida a elección del cliente.
                </Typography>
            </Box>
            </Box>
            {/*Componente card con los datos*/}
            <Grid container spacing={2} style={{ padding: "1em" }}>
                {carta.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Carta
                            nombre={item.nombre}
                            imgurl={item.imgurl}
                            imgsize={item.imgsize}
                            ingredientes={item.ingredientes}
                            precio={item.precio}
                        />
                    </Grid>
                ))}
            </Grid>

        </>
    );
}

export default Comida;
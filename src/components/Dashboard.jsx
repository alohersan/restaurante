import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
//Componente dashboard usado en todas las páginas para la navegación
function Dashboard() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#ee6d1f" }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid
                        container
                        spacing={1}
                        sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        {/*Ir a la pagina inicio*/}
                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Link to="/" style={{ textDecoration: "none", color: "#010101",fontFamily: 'Courier New, monospace',fontWeight: 'bold' }}>Inicio</Link>
                        </Grid>
                        {/*Ir a carta*/}
                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Link to="/carta" style={{ textDecoration: "none", color: "#010101" ,fontFamily: 'Courier New, monospace',fontWeight: 'bold'}}>Carta</Link>
                        </Grid>
                        {/*Ir a reservas*/}
                        <Grid item xs={4} sx={{ textAlign: "center" }}>
                            <Link to="/reservas" style={{ textDecoration: "none", color: "#010101",fontFamily: 'Courier New, monospace',fontWeight: 'bold' }}>Reservas</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Dashboard;

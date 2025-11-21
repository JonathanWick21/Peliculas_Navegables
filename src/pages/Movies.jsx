import { Link } from "react-router-dom"
import MainContent from "../components/MainContent.jsx"
import ReusableCard from "../components/ReusableCard.jsx"
import peliculas from "../data/peliculas.js"


function Peliculas() {
    return(
        <>
        <MainContent titulo = "Catálogo de películas">
            <p className="body-text">Listado</p>
            {/* Este metodo por cada peliculas te muestra todas usando la ReusableCard*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    peliculas.map( (pelicula, index) =>
                        <Link to={`/details/${pelicula.id}` } key={index} aria-label={`Ver detalles de ${pelicula.nombre}`}>
                            <ReusableCard
                                key={index}
                                nombre={pelicula.nombre}
                                foto={pelicula.cartelera}
                                esNota10={pelicula.nota === 10}>
                                    {pelicula.resumen}
                            </ReusableCard>
                        </Link>
                    )
                }
            </div>

        </MainContent>
        </>
    )
}
export default Peliculas

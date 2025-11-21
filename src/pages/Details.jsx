import { useNavigate, useParams} from "react-router-dom";
import peliculas from "../data/peliculas.js";
import ReusableCard from "../components/ReusableCard.jsx";
import { Link } from "react-router-dom";

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    //busca la pelicula por su id
    const pelicula = peliculas.find( peli => peli.id === parseInt(id.split('i')[0]) );
    // si es pelicula(no contiene i)
    if (!id.includes('i')) {
    return(
         <>
        <main className="container mx-auto p-6">
      <section className="md:flex md:items-start md:gap-8">
        <figure className="md:w-2/5 lg:w-1/3 relative flex-shrink-0">
        {/*Boton para que vuelva a la pagina anterior*/}
          <button
            onClick={() => navigate(-1)}
            aria-label="Volver"
            className="absolute top-2 left-2 z-10 bg-white text-gray-800 px-2 py-1 text-sm rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Volver
          </button>
          <img
            src={pelicula.cartelera}
            alt={pelicula.nombre}
            className="w-full h-96 md:h-[36rem] lg:h-[44rem] object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="mt-4 md:mt-0 md:w-3/5 lg:pl-8">
          <h1 className="text-2xl font-bold">{pelicula.nombre}</h1>
          <h3 className="mt-4 text-lg font-semibold">Director</h3>
          <p className="mt-4 text-gray-700">{pelicula.director}</p>
          <h3 className="mt-4 text-lg font-semibold">Nota</h3>
          <p className="mt-4 text-gray-700">{pelicula.nota}/10</p>
          <h3 className="mt-4 text-lg font-semibold">Género</h3>
          <p className="mt-4 text-gray-700">{pelicula.clasificacion}</p>
          <h3 className="mt-4 text-lg font-semibold">Recaudación</h3>
          <p className="mt-4 text-gray-700">{pelicula.recaudacion}</p>
          <h3 className="mt-4 text-lg font-semibold">Sinopsis</h3>
          <p className="mt-4 text-gray-700">{pelicula.resumen}</p>

          
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Actores principales</h2>

        <div className="flex flex-wrap gap-4">
          {pelicula.actores.map((actor, index) => (
            <div key={`${pelicula.id}i${index}`} className="w-40">
              <Link to={`/details/${pelicula.id}i${index}`} aria-label={`Ver detalles de ${actor.nombre}`} className="block">
                <ReusableCard
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </ReusableCard>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
        
        </>
    )
}

//si es interprete
if (id.includes('i')) {

const idActor = parseInt(id.split('i')[1]);
const actor = pelicula.actores[idActor];


    return(
        <>
        <main className="container mx-auto p-6">
        <section className="md:flex md:items-start md:gap-8">
        <figure className="md:w-2/5 lg:w-1/3 relative flex-shrink-0">
        {/*Boton para que vuelva a la pagina anterior*/}
          <button
            onClick={() => navigate(-1)}
            aria-label="Volver"
            className="absolute top-2 left-2 z-10 bg-white text-gray-800 px-2 py-1 text-sm rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Volver
          </button>
          <img
            src={actor.imagen}
            alt={actor.nombre}
            className="w-full h-96 md:h-[36rem] lg:h-[44rem] object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="mt-4 md:mt-0 md:w-3/5 lg:pl-8">
          <p className="mt-2 text-sm text-gray-600">Nota: <span className="font-semibold">{pelicula.nota}</span></p>
          <p className="mt-4 text-gray-700">{actor.biografia}</p>
        </div>
      </section>
    </main>
        </>
    )
}

} export default Details;
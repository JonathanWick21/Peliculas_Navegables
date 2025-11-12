function Interprete(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        /**
         * Con Anima 
         */ 
        // <div className="flex flex-wrap justify-between gap-x-8 gap-y-6 px-5">
        //     <div key={nombre} className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)]">
        //         <div className="aspect-square w-full rounded-lg bg-gray-100">
        //             <img
        //                 src={foto}
        //                 alt={`Foto de ${nombre}`}
        //                 className="w-full h-80 object-cover"
        //             />                    
        //         </div>
        //         <h5 className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${esNota10 ? 'text-red-600' : ''}`}>
        //             {nombre}
        //         </h5>
        //         <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
        //             {props.children}
        //         </p>
        //     </div>
        // </div>
        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    {/* Nombre del intérprete */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete destacado</em>}
                </h2>
            </header>
            {/* Biografía o descripción */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default Interprete;



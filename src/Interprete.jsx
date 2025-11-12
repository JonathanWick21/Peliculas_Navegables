function Interprete(props) {
    const { foto, nombre } = props;
    return (
        /**
         * Utilizando la definición de clases de Tailwind 
         */        
        // <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-80 m-4 overflow-hidden">
        //     <img
        //         src={foto}
        //         alt={`Foto de ${nombre}`}
        //         className="w-full h-80 object-cover"
        //     />
        //     <div className="p-4">
        //         <h2 className="text-xl font-semibold text-gray-800 mb-2">{nombre}</h2>
        //         <p className="text-gray-600 text-sm leading-relaxed">{props.children}</p>
        //     </div>
        // </div>
        // -- //

        /**
         * Con Anima 
         */ 
        <div className="flex flex-wrap justify-between gap-x-8 gap-y-6 px-5">
            <div key={nombre} className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)]">
                <div className="aspect-square w-full rounded-lg bg-gray-100">
                    <img
                        src={foto}
                        alt={`Foto de ${nombre}`}
                        className="w-full h-80 object-cover"
                    />                    
                </div>
                <h5 className="text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height)">
                    {nombre}
                </h5>
                <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                    {props.children}
                </p>
            </div>
        </div>


    );
}

export default Interprete;



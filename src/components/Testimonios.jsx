import React, { useEffect, useState } from "react";

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    fetch("/data/testimonios.json")
      .then((res) => res.json())
      .then((data) => setTestimonios(data))
      .catch((error) => console.error("Error al cargar los testimonios:", error));
  }, []);

  return (
    
      <div className="flex flex-wrap justify-center gap-8">
        {testimonios.map((testimonio) => (
          <div
            key={testimonio.id}
            className="bg-white rounded-2xl shadow-md p-6 w-80 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red"
          >
            <img
              src={testimonio.imagen}
              alt={testimonio.nombre}
              className="w-28 h-28 mx-auto rounded-full border-4 border-brown-dark object-cover mb-4 hover:scale-105 transition-transform duration-300"
            />
            <p className="italic text-gray-700 mb-4">“{testimonio.mensaje}”</p>
            <h3 className="font-bold text-brown-dark">{testimonio.nombre}</h3>
            <p className="text-gray-500">{testimonio.rol}</p>
          </div>
        ))}
      </div>
    
  );
};

export default Testimonios;

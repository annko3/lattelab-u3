import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const allProducts = [...data.beverages, ...data.desserts];
        setProducts(allProducts);
      })
      .catch((error) => console.log("Error al cargar los productos: ", error));
  }, []);

  return (
    <div className="flex flex-rows flex-wrap justify-center gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border-1 border-brown-dark outset-border w-60 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red rounded-2xl overflow-hidden"
        >
          <img src={product.image} alt={product.name} />
          
          <div className="flex flex-col p-2">
            <h3 className="font-bold text-2xl mb-5 text-brown-dark">
              {product.name}
            </h3>
            <p>{product.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Products;

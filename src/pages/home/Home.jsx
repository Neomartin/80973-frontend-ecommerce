import axios from "axios";
import OurServices from "./our-services/OurServices";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import Swal from "sweetalert2";

const URL = "https://694332dc69b12460f313f671.mockapi.io";

function Home() {
  console.log("Home pintado");

  const [products, setProducts] = useState([]);

  async function getProducts() {
    // Lógica para obtener los productos (puede ser una llamada a una API)
    try {
      // Obtener los productos desde una API
      const response = await axios.get(`${URL}/products`);

      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener los productos",
      })
    }
  }

  useEffect(() => {
    // Lógica que quiero que se ejecute al montar el componente
    getProducts();
  }, []); // Si dejo el array de dependencias vacío, se ejecuta solo una vez al montar el componente

  return (
    <>
      <h1> Cursos asincrónicos </h1>
      <section className="cursos-cards">
        {/* Card section */}

        <div className="card-container">

          {

            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
            
          }

        </div>
      </section>
      
      <OurServices />
    </>
  );
}

export default Home;

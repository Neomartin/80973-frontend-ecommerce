import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const URL = "https://694332dc69b12460f313f671.mockapi.io";

function ProductDetail() {

  const [ product, setProduct ] = useState(null)
  const { id } = useParams();

  async function getProductById() {
    // Lógica para obtener el producto por ID (puede ser una llamada a una API)
    try {
      // Completar con la lógica para obtener el producto por ID
    } catch (error) {
      // Manejo de errores
    }
  }


  useEffect(() => {

    // Lógica que quiero que se ejecute al montar el componente

  }, [])

  if(!product) {
    return <h2>Cargando...</h2>
  }


  return (
    <>
      <div className="course-detail">
        <div className="course-picture">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="about-course">
          <h4>{product?.category}</h4>
          <h2>{product?.name}</h2>
          <div className="course-price">
            <h2> ${product?.price}</h2>
          </div>
          <p>
            {product?.description}
          </p>
          <div className="course-actions">
            <button>
              <i className="fa-solid fa-cart-shopping" /> Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

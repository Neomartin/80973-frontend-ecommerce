import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./AdminProducts.css";

const URL = "https://694332dc69b12460f313f671.mockapi.io";

function AdminProducts() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    try {
      
      const response = await axios.get(`${URL}/products`);
      setProducts( response.data );

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al obtener los productos",
      })
      console.log(error);
    }
  }

  async function createProduct(evento) {

    try {

      evento.preventDefault();
      const el = evento.target;

      console.log(el)

      const newProduct = {
        name: el.name?.value,
        price: el.price?.value,
        category: el.category?.value,
        description: el.description?.value,
        image: el.image?.value,
        createdAt: new Date().toISOString(),
      }

      const response = await axios.post(`${URL}/products`, newProduct);

      Swal.fire({
        icon: "success",
        title: "Producto creado",
        text: `El producto ${response.data.name} fue creado correctamente`,
        timer: 2000
      })

      getProducts();
      
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="admin-products">
      <div className="products-form">
        <h4>Agregar Producto</h4>
        <form onSubmit={createProduct}>
          <>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre producto
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Precio
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="price"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Categoría
              </label>
              <select name="category" id="category" className="form-select">
                <option value="curso">Curso</option>
                <option value="webinar">Webinar</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="6"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Imagen
              </label>
              <input
                type="url"
                name="image"
                className="form-control"
                id="image"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Cargar
            </button>
          </>
        </form>
      </div>
      <div className="table-container">
        <table className="admin-courses-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Curso / Webinar</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="td-image">
                  <img
                    className="course-image"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className="td-name">{product.name}</td>
                <td className="td-description">{product.description}</td>
                <td className="td-date">{product.createdAt}</td>
                <td className="td-price">${product.price}</td>
                <td className="td-actions">
                  <button className="td-button-edit">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="td-button-delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>Panel de administración de cursos y webinars</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;

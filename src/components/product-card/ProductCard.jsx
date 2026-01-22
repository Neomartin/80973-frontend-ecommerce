import { NavLink } from "react-router";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card-wrapper">
      <article className="card">
        <div className="card-header">
          {/* Imagen e iconos */}
          <img
            className="card-img card-image-1"
            src={product.image}
            alt={product.name}
          />
          <div className="actions">
            <i className=" fa-regular fa-heart" />
            <i className=" fa-regular fa-eye" />
          </div>
        </div>
        <div className="card-main">
          {/* Descripcion del producto/servicio */}
          <div className="card-top">
            <h4 className="card-category"> {product.category} </h4>
            <span className="card-date"> {product.createdAt} </span>
          </div>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">{product.description}</p>
          <div className="card-price">
            <span className="normal-price">
              <small>$</small>
              {product.price}
            </span>
          </div>
        </div>
        <div className="card-footer">
          <button className="add-to-cart">
            Añadir <i className="fa-solid fa-cart-shopping" />
          </button>

          <NavLink to={`/product/${product.id}`}>
            <button className="more-info">
              Más info
              <i className="fa-solid fa-circle-info" />
            </button>
          </NavLink>
        </div>
      </article>
    </div>
  );
}

export default ProductCard

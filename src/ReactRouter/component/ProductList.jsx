import React from "react";
import { Link } from "react-router-dom";

function ProductList({ title, imgUrl, desp }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text custom-card-text">{desp}</p>
          <Link to="/" className="btn btn-primary">
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

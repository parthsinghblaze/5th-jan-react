import React from "react";
import { featurepackage } from "../featurepakage";
import ProductList from "./ProductList";

function ProductCard() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center py-4">Featured Package</h2>
        <div className="row">
          {featurepackage.map((item) => {
            return <ProductList key={item.id} {...item} />;
          })}

          {/* <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

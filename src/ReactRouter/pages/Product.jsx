import React from "react";
import { Link, Outlet } from "react-router-dom";
import Html from "./Html";

function Product() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center py-3">Some Products</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <Link to="html">
                <h3>HTML</h3>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="js">
                <h3>Js</h3>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="css">
                <h3>CSS</h3>
              </Link>
            </div>
          </div>
          {/* <Html /> */}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Product;

import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="col-md-12 not-found">
      <div className="col-md-4 offset-8 text-center">
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <h4>Give some bellyrubs to Aldo instead :)</h4>
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </div>
    </div>
  );
}

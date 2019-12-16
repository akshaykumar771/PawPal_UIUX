import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="col-md-12 ">
      <div className="col-md-12 vertical-center">
        <div className="col-md-5">
          <h1 className="text-left title">{title}</h1>
          <p className="text-right subtitle">"{subtitle}"</p>
        </div>
      </div>
      <div className="col-md-12 vertical-bottom">
        <div className="col-md-12">
         {children}
        </div>
      </div>
    </div>
  );
}

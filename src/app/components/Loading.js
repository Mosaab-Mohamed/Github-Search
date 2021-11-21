import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

function Loading() {
  return (
    <div className="loading">
      <div className="container">
        <div className="loading__icon">
          <BiLoaderCircle />
        </div>
      </div>
    </div>
  );
}

export default Loading;

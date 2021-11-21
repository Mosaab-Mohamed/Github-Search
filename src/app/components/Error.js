import React from "react";
import { GitContext } from "../context/Context";
import { BiError } from "react-icons/bi";

function Error() {
  const { error } = React.useContext(GitContext);
  return (
    <div className="error">
      <div className="container">
        <div className="error__msg">
          <BiError />
          {error}
        </div>
      </div>
    </div>
  );
}

export default Error;

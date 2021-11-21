import React from "react";
import { GitContext } from "../context/Context";

const Search = () => {
  const { setUserName, limit } = React.useContext(GitContext);
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue);
  };

  return (
    <section className="section search">
      <div className="container">
        <div className="search__content">
          <form className="search__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Github User"
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button type="submit">SEARCH</button>
          </form>
          <div className="search__requests">{limit?.rate.used} / 60</div>
        </div>
      </div>
    </section>
  );
};

export default Search;

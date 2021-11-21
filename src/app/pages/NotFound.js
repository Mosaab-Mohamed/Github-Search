import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound-page">
      <Link to="/">
        <button className="notFound-page__button">GO TO HOME</button>
      </Link>
    </div>
  );
}

export default NotFound;

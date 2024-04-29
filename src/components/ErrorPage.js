import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
      <h1>Oops!</h1>
      <span>Sorry, an unexpected error has occurred.</span>
      <p>
        <i style={{ color: "red" }}>
          Error: {error.statusText || error.message}...
        </i>
      </p>
      <span>
        <Link to="/">
          <u className="error-home-button">Home</u>
        </Link>
      </span>
    </div>
  );
}

import { useRouteError, Link } from "react-router-dom";

/**
 * This component renders an error message and a "Home" button in case of a routing error.
 * The "Home" button directs users back to the homepage.
 * @returns {ReactNode} A React element that renders the error message and "Home" button.
 */

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
        <Link to="/home">
          <u className="error-home-button">Home</u>
        </Link>
      </span>
    </div>
  );
}

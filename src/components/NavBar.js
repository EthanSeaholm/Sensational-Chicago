import { Link, useLocation } from "react-router-dom";

/**
 * This component renders the navigation bar containing a logo, links to external sources, and internal navigation links.
 * The logo also serves as a navigational element that directs users back to the homepage when clicked.
 * The navbar dynamically adjusts its logo and text color based on the current page.
 * @returns {ReactNode} A React element that renders the navigation bar.
 */

export default function NavBar() {
  const location = useLocation(); // returns the user's location according to the current URL for dynamic styling purposes

  return (
    <>
      <nav>
        {location.pathname === "/" ? ( // if the user is on the homepage, render "slimesational" logo
          <div className="slimesational-logo">
            <img
              src="/slimesational.png"
              alt=""
              style={{ width: "353px", height: "auto" }}
            />
          </div>
        ) : (
          // if the user is not on the homepage, render "trapdoor" logo
          <Link to="/" className="trapdoor">
            <img
              src="/trapdoor_orig.png"
              alt=""
              style={{ width: "200px", height: "auto" }}
            />
          </Link>
        )}
        <ul className="navbar">
          <li>
            <a
              href="https://www.youtube.com/@sensationalchi" // external link to Sensational Chicago YouTube channel
              target="blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://sensationalchicago.bigcartel.com/" // external link to Sensational Chicago merchandise shop
              target="blank"
              rel="noopener noreferrer"
            >
              Merch
            </a>
          </li>
          <li>
            <Link
              to="/links" // internal link to Links page
              className={
                location.pathname === "/links" ? "navbar-active" : "white-text"
              } /* if the user is currently on the links page,
              the "Links" text in the navbar changes color to visually indicate the user's current location */
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              to="/gallery" // internal link to Gallery page
              className={
                location.pathname === "/gallery"
                  ? "navbar-active"
                  : "white-text"
              } /* if user is currently on the gallery page,
              the "Gallery" text in the navbar changes color to visually indicate the user's current location */
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <>
      <nav>
        {location.pathname === "/" ? (
          <div className="slimesational-logo">
            <img
              src="/slimesational.png"
              alt=""
              style={{ width: "353px", height: "auto" }}
            />
          </div>
        ) : (
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
              href="https://www.youtube.com/@sensationalchi"
              target="blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://sensationalchicago.bigcartel.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              Merch
            </a>
          </li>
          <li>
            <Link
              to="/links"
              className={location.pathname === "/links" ? "navbar-active" : "white-text"}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={location.pathname === "/gallery" ? "navbar-active" : "white-text"}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

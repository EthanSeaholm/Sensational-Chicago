import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * This component renders the Enter page, which users are immediately directed to upon visiting the application.
 * The "Enter" button directs users to the homepage of the application where the core application and its components are located.
 * @returns {ReactNode} A React element that renders the application's entry page.
 */

export default function EnterPage() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [enterButtonLoaded, setEnterButtonLoaded] = useState(false);

  /**
   * This useEffect function sets respective timeouts for the EnterPage's logo and "Enter" button to fade in and render
   */

  useEffect(() => {
    // setting a timeout for the logo
    const imgTimeout = setTimeout(() => {
      setImgLoaded(true);
    }, 100);

    // setting a timeout for the button
    const enterButtonTimout = setTimeout(() => {
      setEnterButtonLoaded(true);
    }, 1300);

    return () => {
      clearTimeout(imgTimeout);
      clearTimeout(enterButtonTimout);
    };
  }, []);

  return (
    <div className="enter-page-container">
      <div className="enter-page">
        <img
          src="/trapdoor_orig.png"
          alt=""
          style={{ width: "300px", height: "auto" }}
          className={imgLoaded ? "trapdoor-fade loaded" : "trapdoor-fade"}
        />
        <Link to="/home">
          <span
            className={
              enterButtonLoaded
                ? "enter-button-fade loaded"
                : "enter-button-fade"
            }
          >
            <u className="enter-button">ENTER</u>
          </span>
        </Link>
      </div>
    </div>
  );
}

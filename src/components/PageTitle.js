/**
 * This component renders the title of the active page for future usage if necessary.
 * The active page is passed in via the "currentLocation" prop.
 * @param {string} currentLocation - The user's location according to the current URL.
 * @returns {ReactNode} - A React element that renders the title of the user's current page.
 */

export default function PageTitle({ currentLocation }) {
  let pageTitle = "";

  switch (currentLocation) {
    case "/links":
      pageTitle = "Links";
      break;
    case "/gallery":
      pageTitle = "Gallery";
      break;
    default:
      pageTitle = "Page";
  }

  return <div className="page-title">{pageTitle}</div>;
}

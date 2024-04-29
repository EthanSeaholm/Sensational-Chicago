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

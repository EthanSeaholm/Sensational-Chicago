/**
 * If an error occurs while trying to fetch a video from the YouTube API, this component renders and displays the error message.
 * The error message is passed in via the "errorMessage" prop from the VideoPlayer component.
 * @param {string} errorMessage - A message displaying the error encountered when failing to fetch data from the YouTube API. 
 * @returns {ReactNode} A React element that renders the error message.
 */

export default function ErrorMessage({ errorMessage }) {
  return (
    <p>
      <span>
        <i style={{ color: "red" }}>{errorMessage}...</i>
      </span>
    </p>
  );
}

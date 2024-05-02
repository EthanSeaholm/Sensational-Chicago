/**
 * This component renders a placeholder while data is being fetched from the YouTube API.
 * @returns {ReactNode} A React element that renders a placeholder while data is being fetched from the YouTube API.
 */

export default function VideoLoader() {
  return (
    <span className="loader-text">
      <i>Loading our latest video...</i>
    </span>
  );
}

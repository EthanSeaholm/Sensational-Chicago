import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

/**
 * This component renders the homepage including a YouTube video player containing Sensational Chicago's latest video and its title.
 * While data is being fetched from the YouTube API, a loader placeholder is conditionally rendered.
 * @returns {ReactNode} A React element that renders a YouTube video player containing Sensational Chicago's latest video and its title.
 */

export default function VideoPlayer() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const playlistId = process.env.REACT_APP_YOUTUBE_VIDEO_PLAYLIST_ID;
  const apiKey = process.env.REACT_APP_YOUTUBE_VIDEO_API_KEY;

  /**
   * Fetches and renders Sensational Chicago's latest video and its title.
   * @async
   * @function fetchVid
   */

  useEffect(
    function () {
      const controller = new AbortController(); // early AbortController implementation in case of future searchable video feature

      // fetches Sensational Chicago's latest video and its title
      async function fetchVid() {
        try {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`,
            { signal: controller.signal }
          );

          await new Promise((resolve) => setTimeout(resolve, 1500)); // sets a short timeout to ensure loader is rendered briefly

          // if an error occurs while fetching data from the YouTube API, the error message is rendered
          if (!res.ok)
            throw new Error(
              "Something went wrong with fetching our latest video"
            );

          // if fetching data from the YouTube API returns nothing, the error message is rendered
          const data = await res.json();
          if (data.items.length === 0) throw new Error("No videos found");

          const latestVideo = data.items[0];
          const latestVideoTitle = latestVideo.snippet.title;
          const latestVideoId = latestVideo.snippet.resourceId.videoId;
          const latestVideoUrl =
            "https://www.youtube.com/watch?v=" + latestVideoId;

          setVideoTitle(latestVideoTitle);
          setVideoId(latestVideoId);
          setVideoUrl(latestVideoUrl);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        }
      }
      fetchVid();

      return function () {
        controller.abort();
      };
    },
    [apiKey, playlistId] // if the apiKey or playlistId changes, a different video will be rendered (i.e., a new video is uploaded)
  );

  return (
    <>
      {!error && ( // conditionally renders the VideoPlayer component if no errors occur during YouTube API data fetching
        <>
          <div className="video-player-container">
            <h2>
              {!videoTitle ? ( // if data is currently being fetched from the YouTube API, renders the loader placeholder
                <span className="loader-text">
                  <i>Loading our latest video...</i>
                </span>
              ) : (
                // once data has been fetched from the YouTube API, renders Sensational Chicago's latest video and its title
                <div>
                  <Link to={videoUrl} target="_blank">
                    <span>{videoTitle}</span>
                  </Link>
                </div>
              )}
            </h2>
            <iframe
              className="video-player"
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1`}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
      {error && (
        <p className="error">
          <ErrorMessage errorMessage={error} />
        </p>
      )}
    </>
  );
}

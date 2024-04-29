import { useEffect, useState } from "react";
import VideoLoader from "./VideoLoader";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

export default function VideoPlayer() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoId, setVideoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const playlistId = process.env.REACT_APP_YOUTUBE_VIDEO_PLAYLIST_ID;
  const apiKey = process.env.REACT_APP_YOUTUBE_VIDEO_API_KEY;

  useEffect(function () {
    const controller = new AbortController();

    async function fetchVid() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`,
          { signal: controller.signal }
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (!res.ok)
          throw new Error(
            "Something went wrong with fetching our latest video"
          );

        const data = await res.json();
        if (data.items.length === 0) throw new Error("No videos found");
        // console.log(data);

        setError("");

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
      } finally {
        setIsLoading(false);
      }
    }
    fetchVid();

    return function () {
      controller.abort();
    };
  }, []);

  return (
    <>
      {!isLoading && !error && (
        <>
          <div className="video-player-container">
            <h2>
              {videoTitle ? (
                <div>
                  <Link to={videoUrl} target="_blank">
                    <span>{videoTitle}</span>
                  </Link>
                </div>
              ) : (
                <VideoLoader />
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
          <ErrorMessage message={error} />
        </p>
      )}
    </>
  );
}

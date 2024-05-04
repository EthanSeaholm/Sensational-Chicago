import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/**
 * This component renders the Links page, which consists of two lists: "Socials" and "Full-Length Videos."
 * The Socials list renders social media links for Sensational Chicago affiliates.
 * The Full-Length Videos list renders media links for Sensational Chicago's full-length skateboarding videos.
 */

const socials = [
  // array of objects containing social media information
  {
    id: "sensationalChicago",
    user: "Sensational Chicago",
    instagramUrl: "https://www.instagram.com/sensationalchi",
    youtubeUrl: "https://www.youtube.com/@sensationalchi",
  },
  {
    id: "ethan",
    user: "Ethan Seaholm",
    instagramUrl: "https://www.instagram.com/ethanseaholm",
    youtubeUrl: "https://www.youtube.com/@ethancartierxo",
  },
  {
    id: "neil",
    user: "Neil Tarnowski",
    instagramUrl: "https://www.instagram.com/neiltarnowski",
  },
  {
    id: "rex",
    user: "Rex Smithberg",
    instagramUrl: "https://www.instagram.com/rexsmithberg",
  },
  {
    id: "jonathan",
    user: "Jonathan Mays",
    instagramUrl: "https://www.instagram.com/jonathan_mayss",
  },
  {
    id: "josh",
    user: "Josh Kinsinger",
    instagramUrl: "https://www.instagram.com/joshkinsinger",
  },
  {
    id: "thomas",
    user: "Thomas Perry",
    instagramUrl: "https://www.instagram.com/thomoperry",
  },
  {
    id: "devan",
    user: "Devan Patterson",
    instagramUrl: "https://www.instagram.com/devanp02",
  },
];

const fullLengthVideos = [
  // array of objects containing full-length video information
  {
    id: "cropdust",
    video: "CROP DUST",
    year: "2024",
    youtubeUrl: "https://www.youtube.com/watch?v=Ml5pKZIncjY&t=1s",
  },
  {
    id: "nowadays",
    video: "NOWADAYS",
    year: "2021",
    vimeoUrl: "https://vimeo.com/502160577",
  },
  {
    id: "sensational",
    video: "SENSATIONAL",
    year: "2017",
    youtubeUrl: "https://www.youtube.com/watch?v=PEVHEIe8M54",
  },
];

export default function LinksPage() {
  return (
    <div>
      <NavBar />
      <div className="links-list-container">
        <div className="socials-column">
          <h2 className="link-list-headers">Socials</h2>
          <SocialsList users={socials} />
        </div>
        <div className="videos-column">
          <h2 className="link-list-headers">Full-Length Videos</h2>
          <FullLengthVideosList videos={fullLengthVideos} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function SocialsList({ users }) {
  // prop: users
  return (
    <ul className="links-list">
      {users.map(
        (
          user // maps each user to a Socials component
        ) => (
          <Socials // renders a Socials component for each user
            user={user.user}
            key={user.id}
            instagramUrl={user.instagramUrl}
            youtubeUrl={user.youtubeUrl}
          />
        )
      )}
    </ul>
  );
}

function Socials({ user, instagramUrl, youtubeUrl }) {
  // props: user, instagramUrl, youtubeUrl
  return (
    // renders a Socials component for each mapped user via passed in props
    <>
      <li>
        <div>
          {instagramUrl && (
            <Link to={instagramUrl} target="_blank">
              <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />{" "}
              {/* displays Instagram icon if present */}
            </Link>
          )}
          {youtubeUrl && (
            <Link to={youtubeUrl} target="_blank">
              <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />{" "}
              {/* displays YouTube icon if present */}
            </Link>
          )}
          <span>{user}</span> {/* displays user */}
        </div>
      </li>
    </>
  );
}

function FullLengthVideosList({ videos }) {
  // prop: videos
  return (
    <ul className="links-list">
      {videos.map(
        (
          video // maps each video to a FullLengthVideos component
        ) => (
          <FullLengthVideos // renders a FullLengthVideos component for each video
            video={video.video}
            year={video.year}
            key={video.id}
            youtubeUrl={video.youtubeUrl}
            vimeoUrl={video.vimeoUrl}
          />
        )
      )}
    </ul>
  );
}

function FullLengthVideos({ video, year, youtubeUrl, vimeoUrl }) {
  // props: video, year, youtubeUrl, vimeoUrl
  return (
    // renders a FullLengthVideos component for each mapped video via passed in props
    <>
      <li>
        <div className="video-link-container">
          {youtubeUrl && (
            <Link
              to={youtubeUrl}
              target="_blank"
              className="full-length-video-links"
            >
              <span>
                {/* displays YouTube icon if present */}
                <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />
                {/* displays video title and release year */}
                {video} <i>{`(${year})`}</i>
              </span>
            </Link>
          )}
          {vimeoUrl && (
            <Link
              to={vimeoUrl}
              target="_blank"
              className="full-length-video-links"
            >
              <span>
                {/* displays Vimeo icon if present*/}
                <FontAwesomeIcon className="vimeo-icon" icon={faVimeo} />
                {video} <i>{`(${year})`}</i>
              </span>
            </Link>
          )}
        </div>
      </li>
    </>
  );
}

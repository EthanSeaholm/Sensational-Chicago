import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socials = [   // creating an array of objects holding social media information
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

const fullLengthVideos = [    // creating an array of objects holding full-length video information
  {
    id: "sensational",
    video: "SENSATIONAL",
    year: "2017",
    youtubeUrl: "https://www.youtube.com/watch?v=PEVHEIe8M54",
  },
  {
    id: "nowadays",
    video: "NOWADAYS",
    year: "2021",
    vimeoUrl: "https://vimeo.com/502160577",
  },
];

export default function LinksPage() {
  return (
    <div>
      <NavBar />    {/* rendering NavBar component */}
      {/* <PageTitle currentLocation="/links" /> */}
      <div className="links-list-container">
        <div className="socials-column">
          <h2 className="link-list-headers">Socials</h2>
          <SocialsList users={socials} />   {/* passing in socials array via "users" prop to SocialsList component */}
        </div>
        <div className="videos-column">
          <h2 className="link-list-headers">Full-Length Videos</h2>
          <FullLengthVideosList videos={fullLengthVideos} />    {/* passing in fullLengthVideos array via "videos" prop to FullLengthVideoslist component*/}
        </div>
      </div>
      <Footer />    {/* rendering Footer component*/}
    </div>
  );
}

function SocialsList({ users }) {   // passing in users prop
  return (
    <ul className="links-list">
      {users.map((user) => (    // mapping each "user" (object) in the users (socials) array
        <Socials    // for each user, an instance of the Socials component is created
          user={user.user}
          key={user.id}
          instagramUrl={user.instagramUrl}
          youtubeUrl={user.youtubeUrl}    /* passing in props "user", "key", "instagramUrl", and "youtubeUrl" based on each mapped user's
          original object properties to Socials component */
        />
      ))}
    </ul>
  );
}

function Socials({ user, instagramUrl, youtubeUrl }) {    // passing in to-be-used props mentioned above
  return (    // renders the instance of the Socials component for each mapped user via passed in props
    <>
      <li>
        <div>
          {instagramUrl && (
            <Link to={instagramUrl} target="_blank">
              <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />   {/* if an instagramUrl is present for a user, display the imported Instagram icon */}
            </Link>
          )}
          {youtubeUrl && (
            <Link to={youtubeUrl} target="_blank">
              <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />   {/* if a youtubeUrl is present for a user, display the imported YouTub icon */}
            </Link>
          )}
          <span>{user}</span>   {/* display user */}
        </div>
      </li>
    </>
  );
}

function FullLengthVideosList({ videos }) {
  return (
    <ul className="links-list">
      {videos.map((video) => (
        <FullLengthVideos
          video={video.video}
          year={video.year}
          key={video.id}
          youtubeUrl={video.youtubeUrl}
          vimeoUrl={video.vimeoUrl}
        />
      ))}
    </ul>
  );
}

function FullLengthVideos({ video, year, youtubeUrl, vimeoUrl }) {
  return (
    <>
      <li>
        <div className="video-link-container">
          {youtubeUrl && (
            <Link
              to={youtubeUrl}
              target="_blank"
              className="full-length-video-links"
            >
              <FontAwesomeIcon className="youtube-icon" icon={faYoutube} />
              <span>
                {video}
                <span>
                  <i>{`(${year})`}</i>
                </span>
              </span>
            </Link>
          )}
          {vimeoUrl && (
            <Link
              to={vimeoUrl}
              target="_blank"
              className="full-length-video-links"
            >
              <FontAwesomeIcon className="vimeo-icon" icon={faVimeo} />
              <span>
                {video}
                <span>
                  <i>{`(${year})`}</i>
                </span>
              </span>
            </Link>
          )}
        </div>
      </li>
    </>
  );
}

import NavBar from "./NavBar";
import PageTitle from "./PageTitle";
import Footer from "./Footer";

import photo1 from "../gallery-resources/photos/p1.jpg";
import photo2 from "../gallery-resources/photos/p2.jpg";
import photo3 from "../gallery-resources/photos/p3.jpg";
import photo4 from "../gallery-resources/photos/p4.jpg";
import photo5 from "../gallery-resources/photos/p5.jpg";
import photo6 from "../gallery-resources/photos/p6.jpg";
import photo7 from "../gallery-resources/photos/p7.jpg";
import photo8 from "../gallery-resources/photos/p8.JPG";
import photo9 from "../gallery-resources/photos/p9.jpg";
import photo10 from "../gallery-resources/photos/p10.jpg";
import photo11 from "../gallery-resources/photos/p11.JPG";
import photo12 from "../gallery-resources/photos/p12.jpg";
import photo13 from "../gallery-resources/photos/p13.JPG";
import photo14 from "../gallery-resources/photos/p14.jpg";
import photo15 from "../gallery-resources/photos/p15.jpg";
import { useState } from "react";

const photos = [
  {
    id: 1,
    photoLink: photo1,
    description:
      "Josh & Rex - Huffman Skatepark in West Dundee, IL, Summer 2022.",
  },
  {
    id: 2,
    photoLink: photo2,
    description:
      "(L to R) Neil, Jonathan, Thomas, Ethan, & Josh - Josh's 22nd birthday at his house, Summer 2021.",
  },
  {
    id: 3,
    photoLink: photo3,
    description: "Josh & Ethan - Josh's park, Winter 2017.",
  },
  {
    id: 4,
    photoLink: photo4,
    description:
      "(L to R) Jonathan, Rex, Josh, & Neil - Spikeball in Black River Falls, WI, Summer 2018.",
  },
  {
    id: 5,
    photoLink: photo5,
    description:
      "(L to R) Rex, Ethan, Josh, Thomas, & Jonathan - Volleyball Tuesday at Sideouts, Summer 2022.",
  },
  {
    id: 6,
    photoLink: photo6,
    description: "Neil & Jonathan - Josh's park, Summer 2019.",
  },
  {
    id: 7,
    photoLink: photo7,
    description:
      "(L to R) Rex, Josh, Thomas, & Jonathan - New Year's Eve in Marco Island, FL, 2020.",
  },
  {
    id: 8,
    photoLink: photo8,
    description:
      "(L to R) Jonathan, Ethan, & Josh - Jonathan's place in Black River Falls, WI, Summer 2018.",
  },
  {
    id: 9,
    photoLink: photo9,
    description: "Rex & Jonathan - Chase Plaza in Chicago, IL, Summer 2021.",
  },
  {
    id: 10,
    photoLink: photo10,
    description:
      "Jonathan & Rex - Bond Park Skatepark in Janesville, WI, Summer 2019.",
  },
  {
    id: 11,
    photoLink: photo11,
    description:
      "(L to R) Josh, Rex, Ethan, & Jonathan - Filming a clothing lookbook video at Josh's park, Summer 2018.",
  },
  {
    id: 12,
    photoLink: photo12,
    description:
      "Ethan, our (now retired) VX2000, and his boot courtesy of the spot behind him a few weeks prior - Dekalb, IL, Summer 2020.",
  },
  {
    id: 13,
    photoLink: photo13,
    description:
      "(L to R) Josh, Ethan, Jonathan, Neil, & Thomas - Milwaukee, WI, Summer 2020.",
  },
  {
    id: 14,
    photoLink: photo14,
    description:
      "(L to R) Thomas, Josh, Jonathan, & Rex - New Year's Eve in Marco Island, FL, 2020.",
  },
  {
    id: 15,
    photoLink: photo15,
    description: "(L to R) Rex, Jonathan, & Neil - Elgin, IL, Summer 2019.",
  },
];

export default function Gallery() {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function handleEnlargePhoto(id) {
    setIsEnlarged(true);
    setSelectedId(id);
  }

  function handleCloseEnlargedPhoto() {
    setIsEnlarged(false);
    setSelectedId(null);
  }

  return (
    <div>
      <NavBar />
      {isEnlarged ? (
        <EnlargedPhoto
          photo={photos.find((photo) => photo.id === selectedId).photoLink}
          description={
            photos.find((photo) => photo.id === selectedId).description
          }
          onClose={handleCloseEnlargedPhoto}
        />
      ) : (
        <>
          {/* <PageTitle currentLocation="/gallery" /> */}
          <PhotosList photos={photos} onEnlargePhoto={handleEnlargePhoto} />
          <Footer />
        </>
      )}
    </div>
  );
}

function PhotosList({ photos, onEnlargePhoto }) {
  return (
    <ul className="gallery">
      {photos.map((photo) => (
        <Photo
          photo={photo.photoLink}
          description={photo.description}
          key={photo.id}
          onClick={() => onEnlargePhoto(photo.id)}
        />
      ))}
    </ul>
  );
}

function Photo({ photo, description, onClick }) {
  return (
    <li>
      <img src={photo} alt={description} onClick={onClick} />
    </li>
  );
}

function EnlargedPhoto({ photo, description, onClose }) {
  return (
    <>
      <div className="enlarged-photo-container">
        <span className="close-button" onClick={onClose}>
          <i>Close</i>
        </span>
        <div>
          <img src={photo} alt={description} className="enlarged-photo" />
        </div>
        <span className="enlarged-photo-text">{description}</span>
      </div>
    </>
  );
}

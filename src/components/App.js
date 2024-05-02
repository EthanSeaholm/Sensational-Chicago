import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";

/**
 * This component renders the entire React application with the following core components: NavBar, VideoPlayer, and Footer.
 * @returns {ReactNode} A React element that renders the entire React application.
 */

export default function App() {
  return (
    <>
      <NavBar />
      <VideoPlayer />
      <Footer />
    </>
  );
}

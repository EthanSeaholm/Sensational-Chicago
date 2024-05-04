import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";

/**
 * This component renders the core React application, including the NavBar, VideoPlayer, and Footer.
 * Users are initially directed to the EnterPage component prior to accessing the main application.
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

import HeadSection from "../../components/HeadSection";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PictureField from "../../components/PictureField";
import Caroussel from "../../components/Caroussel";
import { ThemeProvider } from "../../utilities/Context";

function Gallery() {
  return (
    <div>
      <ThemeProvider>
        <Caroussel />
        <Nav />
        <HeadSection title="gallery" />
        <PictureField />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Gallery;

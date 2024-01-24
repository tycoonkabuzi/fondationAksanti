import styled from "styled-components";
import { useEffect, useState } from "react";
import background from "../assets/background.jpg";
const CoverImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 0%;
`;
function RandomImages({ images, imageLoad, setImageLoad }) {
  const [cover, setCover] = useState("");

  console.log(imageLoad);
  useEffect(() => {
    const imagesIndex = Math.floor(Math.random() * images.length);
    setCover(images[imagesIndex]);
  }, [images, imageLoad, setImageLoad]);

  return <CoverImage src={cover} alt="images" />;
}
export default RandomImages;

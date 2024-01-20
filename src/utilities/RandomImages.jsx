import styled from "styled-components";
import { useEffect, useState } from "react";
const CoverImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 0%;
`;
function RandomImages({ images }) {
  const [cover, setCover] = useState("");
  useEffect(() => {
    const imagesIndex = Math.floor(Math.random() * images.length);

    setTimeout(() => {
      setCover(images[imagesIndex]);
    }, 5000);
  }, [cover, images]);

  return <CoverImage src={cover} alt="images" />;
}
export default RandomImages;

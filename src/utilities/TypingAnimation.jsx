import { useState, useEffect } from "react";

function TypingAnimation({ text, time }) {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, time);
    }
  });
  return <p>{typedText}</p>;
}
export default TypingAnimation;

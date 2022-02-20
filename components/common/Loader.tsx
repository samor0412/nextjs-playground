import { useEffect, useState } from "react";

const Loader = () => {
  const [text, setText] = useState("Loading");
  useEffect(() => {
    const interval = setInterval(() => {
      setText((text) => {
        const newString = text + ".";
        return newString.length > 10 ? "Loading" : newString;
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>{text}</p>;
};

export default Loader;

import React, { useState, useEffect } from "react";

const useScrollDetect = () => {
  const [shadow, setShadow] = useState(false);
  const handleScroll = (event) => {
    let scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return { shadow };
};

export {
  // export everything in this folder here
  useScrollDetect,
};

import { node, string } from "prop-types";
import Header from "../Header.jsx";
import { useEffect, useState } from "react";

export default function PageWrapper({
  mobileBgImageSrc,
  tabletBgImageSrc,
  desktopBgImageSrc,
  children,
}) {
  const [bgSrc, setBgSrc] = useState(mobileBgImageSrc);

  useEffect(() => {
    function updateBgImage() {
      if (window.innerWidth >= 1024) {
        setBgSrc(desktopBgImageSrc);
      } else if (window.innerWidth >= 768) {
        setBgSrc(tabletBgImageSrc);
      } else {
        setBgSrc(mobileBgImageSrc);
      }
    }

    updateBgImage();

    window.addEventListener("resize", updateBgImage);

    return () => window.removeEventListener("resize", updateBgImage);
  }, [mobileBgImageSrc, tabletBgImageSrc, desktopBgImageSrc]);

  return (
    <div
      className={`min-h-screen flex flex-col bg-blue-900 bg-size-[100%_100%] bg-no-repeat`}
      style={{ backgroundImage: `url('${bgSrc}')` }}
    >
      <Header />
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  mobileBgImageSrc: string,
  tabletBgImageSrc: string,
  desktopBgImageSrc: string,
  children: node.isRequired,
};

import { node, string } from "prop-types";
import Header from "../Header.jsx";

export default function PageWrapper({
  mobileBgImageSrc,
  tabletBgImageSrc,
  desktopBgImageSrc,
  children,
}) {
  return (
    <div
      className={`min-h-screen flex flex-col bg-blue-900 bg-[url('${mobileBgImageSrc}')] md:bg-[url('${tabletBgImageSrc}')] lg:bg-[url('${desktopBgImageSrc}')] bg-size-[100%_100%]`}
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

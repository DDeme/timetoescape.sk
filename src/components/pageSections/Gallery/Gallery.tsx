import React from "react";
import GalleryLightbox from "./GalleryLightBox";
import { MainPageSection } from "../../shared/MainPageSection";
import "twin.macro";
const imagesPath = "gallery/";

export const Gallery = () => (
  <MainPageSection id={"gallery"}>
    <h2 tw="text-3xl lg:text-4xl text-center" className="alt-font">
      Galéria
    </h2>
    <GalleryLightbox imagesPath={imagesPath} />
  </MainPageSection>
);

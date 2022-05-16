import React from "react";
import Lightbox from "./LightBox";
import { MainPageSection } from "./shared/MainPageSection";
import "twin.macro";
const imagesPath = "gallery/";

export const Gallery = () => (
  <MainPageSection id={"gallery"}>
    <h2 tw="text-3xl lg:text-4xl text-center" className="alt-font">
      Galéria
    </h2>
    <Lightbox imagesPath={imagesPath} />
  </MainPageSection>
);

// @ts-nocheck
/**
 * Input/output gallery paths — kept in sync with each /projects/ case study page.
 */

const img = (path) => encodeURI(path);

export const lasVegasMultifamilyGallery = {
  bannerImage: img("/image/Architectural 3D Visualization_Banner.jpg"),
  inputImages: [
    img("/image/2D AutoCAD drawing_1.jpg"),
    img("/image/2D AutoCAD drawing_3.jpg"),
    img("/image/2D AutoCAD drawing_4.jpg"),
    img("/image/2D AutoCAD drawing_5.jpg"),
    img("/image/2D AutoCAD drawing.jpg"),
  ],
  outputImages: [
    "/image/Architectural-3D-Visualization_2.jpg",
    "/image/Architectural-3D-Visualization-(3).jpg",
    "/image/Architectural-3D-Visualization-(4).jpg",
    "/image/Architectural-3D-Visualization-(5).jpg",
    "/image/Architectural-3D-Visualization.jpg",
  ],
};

/** @see src/pages/projects/multi-discipline-bim-modeling-for-public-sector-atlanta.js */
export const atlantaPublicSafetyGallery = {
  bannerImage: img("/image/police3D Visualization Banner.jpg"),
  inputImages: [
    "/image/Policeinput.jpg",
    "/image/policeInput_2.jpg",
    "/image/policeInput_3.jpg",
    "/image/policeInput_4.jpg",
    "/image/policeinput5.jpg",
    "/image/policeInput_6.jpg",
    "/image/policeInput_7.jpg",
    "/image/policeInput_8.jpg",
  ],
  outputImages: [
    "/image/3D Visualization_1.jpg",
    "/image/3D Visualization_2.jpg",
    "/image/3D Visualization_3.jpg",
    "/image/3D Visualization_4.jpg",
    "/image/3D Visualization_5.jpg",
  ],
};

/** @see src/pages/projects/architectural-visualization-residential-villa-dubai.js */
export const dubaiVillaGallery = {
  bannerImage: img("/image/3D Visualization Banner.jpg"),
  inputImages: [
    "/image/Input_1.jpg",
    "/image/Input_2.jpg",
    "/image/Input_3.jpg",
    "/image/Input_4.jpg",
    "/image/Input_5.jpg",
  ],
  outputImages: [
    "/image/3D interior_2.jpg",
    "/image/3D interior_3.jpg",
    "/image/3D interior_4.jpg",
    "/image/3D interior_5.jpg",
    "/image/3D interior_6.jpg",
    "/image/3D interior_7.jpg",
    "/image/3D interior_8.jpg",
    "/image/3D interior_9.jpg",
    "/image/3D interior_11.jpg",
    "/image/3D interior_12.jpg",
  ],
};

/** @see src/pages/projects/construction-documentation-commercial-building-california.js */
export const californiaCommercialGallery = {
  bannerImage: img("/image/3D Visualizaton_-Banner.jpg"),
  inputImages: [
    img("/image/Input_Construction Documentation_1.jpg"),
    img("/image/Input_Construction Documentation_2.jpg"),
    img("/image/Input_Construction Documentation_3.jpg"),
    img("/image/Input_Construction Documentation_4.jpg"),
    img("/image/Input_Construction Documentation_5.jpg"),
    img("/image/Input_Construction Documentation_6.jpg"),
  ],
  outputImages: [
    img("/image/3D Visualizaton_1.jpg"),
    img("/image/3D Visualizaton_2.jpg"),
    img("/image/3D Visualizaton_3.jpg"),
    img("/image/3D Visualizaton_4.jpg"),
    img("/image/3D Visualizaton_5.jpg"),
    img("/image/3D Visualizaton_6.jpg"),
    img("/image/3D Visualizaton_7.jpg"),
  ],
};

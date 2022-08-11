import Grid1 from "./GridGalleryPhotos/grid1.jpg";
import Grid2 from "./GridGalleryPhotos/grid2.jpg";
import Grid3 from "./GridGalleryPhotos/grid3.jpg";
import Grid4 from "./GridGalleryPhotos/grid4.jpg";
import Grid5 from "./GridGalleryPhotos/grid5.jpg";
import Grid6 from "./GridGalleryPhotos/grid6.jpg";
import Grid7 from "./GridGalleryPhotos/grid7.jpg";
import Grid8 from "./GridGalleryPhotos/grid8.jpg";
import Grid9 from "./GridGalleryPhotos/grid9.jpg";
import Grid10 from "./GridGalleryPhotos/grid10.jpg";
import Grid11 from "./GridGalleryPhotos/grid11.jpg";
import Grid12 from "./GridGalleryPhotos/grid12.jpg";
import Grid14 from "./GridGalleryPhotos/grid14.jpg";
import Grid15 from "./GridGalleryPhotos/grid15.jpg";
import Grid16 from "./GridGalleryPhotos/grid16.jpg";
import Grid17 from "./GridGalleryPhotos/grid17.jpg";
import Grid18 from "./GridGalleryPhotos/grid18.jpg";
import Grid19 from "./GridGalleryPhotos/grid19.jpg";
import Grid20 from "./GridGalleryPhotos/grid20.jpg";
import Grid21 from "./GridGalleryPhotos/grid21.jpg";
import Grid22 from "./GridGalleryPhotos/grid22.jpg";
import Grid23 from "./GridGalleryPhotos/grid23.jpg";
import Grid27 from "./GridGalleryPhotos/grid27.jpg";
import Grid32 from "./GridGalleryPhotos/grid32.jpg";
import Grid31 from "./GridGalleryPhotos/grid31.jpg";
import "./NewGalleryHomePage.css";

const NewGalleryHomePage = () => {
  const arrayGrid1 = [
    Grid1,
    Grid18,
    Grid31,
    Grid14,
    Grid5,
    Grid6,
    Grid32,
    Grid8,
    Grid27,
    Grid11,
  ];

  //   const arrayGrid3 = [Grid11, Grid12, Grid14, Grid15, Grid16];
  //   const arrayGrid4 = [Grid17, Grid18, Grid19, Grid20, Grid21];
  //   const arrayGrid5 = [Grid22, Grid23, Grid24, Grid25, Grid26];
  return (
    <div className="gallery">
      {arrayGrid1.map((photo) => {
        return <img src={photo} />;
      })}
    </div>
  );
};

export default NewGalleryHomePage;

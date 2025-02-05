import Gallery1 from "./img/gallery1.jpg"
import Gallery2 from "./img/gallery2.jpg"
import Gallery3 from "./img/gallery3.jpg"

import {GallerySection, ContainerLeft, ContainerRight, ImageLeft, ImageRight} from "./galleryStyle"



function Gallery() {
  return (
    <>
      <GallerySection>
        <ContainerLeft>
          <ImageLeft src={Gallery1} />
          <ImageLeft src={Gallery2} />
        </ContainerLeft>
        <ContainerRight>
          <ImageRight src={Gallery3} />
        </ContainerRight>
      </GallerySection>
    </>
  )
}

export default Gallery

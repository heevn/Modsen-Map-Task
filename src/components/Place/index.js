import { ImgWrapper, PlaceWrapper, TextImgWrapper } from "./styled"

export default function Place() {
  return (
      <PlaceWrapper>
        <TextImgWrapper>
          <ImgWrapper />
          <div>Фантасмагорический музей им. П.М.Машерова</div>
        </TextImgWrapper>
      </PlaceWrapper>
  )
}
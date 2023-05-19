import { SliderItem, Wrapper } from "./LayoutBannerStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerPresenter() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
      </Slider>
    </Wrapper>
  );
}

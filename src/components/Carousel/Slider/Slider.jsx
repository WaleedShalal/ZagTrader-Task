import { useEffect, useState } from "react";
import slidesData from "../Data/Data";
import Indicators from "../Indicators/Indicators";
import Slide from "../Slide/Slide";
import styles from "./Slider.module.scss";

const maxSlidersNumber = slidesData.length - 1;
function Slider({ activeSlide, slideImage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideChange = setInterval(() => {
      setCurrentSlide((prevState) =>
        prevState === maxSlidersNumber ? 0 : prevState + 1,
      );
    }, 3000);
    return () => clearInterval(slideChange);
  }, [currentSlide]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide((prevState) => (prevState = index));
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slides__wrapper}>
        <Slide slidesData={slidesData} currentSlide={currentSlide} />
      </div>
      <div className={styles.indicator__wrapper}>
        <Indicators
          slidesData={slidesData}
          currentSlide={currentSlide}
          handleIndicatorClick={handleIndicatorClick}
        />
      </div>
    </section>
  );
}

export default Slider;

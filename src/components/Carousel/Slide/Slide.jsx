import { Link } from "react-router-dom";
import useWindowSize from "../../useWindowSize/useWindowSize";
import styles from "./Slide.module.scss";

function Slide({ slidesData, currentSlide }) {
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= 992;

  return (
    <>
      {slidesData.map((slideData, index) => {
        return (
          <div
            key={index}
            className={`${styles.slide} ${
              currentSlide === index && styles.isActiveOne
            }`}
            style={{
              transform:
                !isLargeScreen &&
                `translateX(${100 * (index - currentSlide)}%)`,
            }}>
            <div className={styles.slide__contentWrapper}>
              <div
                className={styles.content__title}
                style={{
                  transform:
                    isLargeScreen &&
                    `translateY(${100 * (index - currentSlide)}%)`,
                }}>
                <h2 className='mb-0'>{slideData.title}</h2>
                <h5 className='mb-0'>{slideData.subTitle}</h5>
              </div>
              <div className={styles.content__details}>
                <figure
                  className={`${styles.details__imageWrapper} mb-0`}
                  style={{
                    transform:
                      isLargeScreen &&
                      `translateY(${100 * (index - currentSlide)}%) scale(${
                        currentSlide === index ? 1 : 0
                      }) rotateY(${100 * (index - currentSlide)}deg)`,
                  }}>
                  <img src={slideData.image} alt='slide-img' />
                </figure>
                <div
                  className={styles.details__linkWrapper}
                  style={{
                    transform:
                      isLargeScreen &&
                      `translateY(${100 * (index - currentSlide)}%)`,
                  }}>
                  <Link to='/sign-in' className={styles.details__link}>
                    <span>{slideData.linkTitle}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Slide;

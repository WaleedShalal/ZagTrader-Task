import styles from "./Indicators.module.scss";

function Indicators({ slidesData, currentSlide, handleIndicatorClick }) {
  return (
    <>
      {slidesData.map((slideData, index) => {
        return (
          <div
            key={index}
            className={`${styles.indicator} ${
              currentSlide === index && styles.isActive
            }`}
            onClick={() => handleIndicatorClick(index)}>
            <span></span>
          </div>
        );
      })}
    </>
  );
}

export default Indicators;

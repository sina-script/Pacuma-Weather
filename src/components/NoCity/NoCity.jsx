import styles from "./NoCity.module.css";

export default function NoCity({onClose}) {
  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="no-city-title"
        aria-describedby="no-city-description"
      >
        <div className={styles.visual} aria-hidden="true">
          <span className={styles.orbit} />
          <span className={styles.orbitInner} />

          <svg
            className={styles.locationIcon}
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M40 68s22-19.5 22-39a22 22 0 1 0-44 0c0 19.5 22 39 22 39Z"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M34 23l12 12m0-12L34 35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <span className={`${styles.sparkle} ${styles.sparkleOne}`} />
          <span className={`${styles.sparkle} ${styles.sparkleTwo}`} />
          <span className={`${styles.sparkle} ${styles.sparkleThree}`} />
        </div>

        <span className={styles.eyebrow}>LOCATION UNAVAILABLE</span>

        <h2 id="no-city-title" className={styles.title}>
          City <span>not found.</span>
        </h2>

        <p id="no-city-description" className={styles.description}>
          We couldn&apos;t find that city. Check the spelling and give it
          another try.
        </p>

        <button className={styles.backButton} type="button" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M19 12H5m0 0 6 6m-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to weather</span>
        </button>

        <span className={styles.bottomGlow} aria-hidden="true" />
      </div>
    </div>
  );
}

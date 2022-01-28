import styles from '../styles/flexboxGridSystem.module.css'

const FlexboxGridSystem = () => {
  return (
    <div className={styles.body}>

      {/* Row 1: One box per column */}
      <div className={styles.figure}>
        <div className={styles.one}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 1</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.one}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 2</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.one}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 3</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.one}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 4</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>

      {/* Row 2: One box per column */}
      <div className={styles.figure}>
        <div className={styles.two}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 1</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.two}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 2</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.two}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 3</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.two}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 4</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>

      {/* Row 3: One box per column */}
      <div className={styles.figure}>
        <div className={styles.three}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 1</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.three}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 2</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.three}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 3</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.three}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 4</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>

      {/* Row 4: One box per column */}
      <div className={styles.figure}>
        <div className={styles.four}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 1</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.four}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 2</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.four}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 3</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.four}></div>
        <div className={styles.figcaption}>
          <h2>Abstract 4</h2>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
      </div>
    </div>
  );
};

export default FlexboxGridSystem;

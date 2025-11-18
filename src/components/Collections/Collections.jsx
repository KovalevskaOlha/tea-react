import styles from "./Collections.module.css";
import blacktea from "../../assets/images/blacktea.webp";
import greentea from "../../assets/images/greentea.webp";
import whitetea from "../../assets/images/whitetea.webp";
import oolongtea from "../../assets/images/oolongtea.webp";
import puerhtea from "../../assets/images/puertea.webp";
 const Collections = () => {
    return (
         <section className={styles.collection}>
          <div className="container">
            <h2 className={styles.collection__title}>Explore our Collections</h2>
            <ul className={styles.collection__list}>
              <li className={styles.collection__item}>
                <img
                  src={blacktea}
                  alt="black tea"
                  className={styles.collection__img}
                />
                <p className={styles.collection__description}>Black</p>
              </li>
              <li className={styles.collection__item}>
                <img
                  src={greentea}
                  alt="green tea"
                  className={styles.collection__img}
                />
                <p className={styles.collection__description}>Green</p>
              </li>
              <li className={styles.collection__item}>
                <img
                  src={whitetea}
                  alt="white tea"
                  className={styles.collection__img}
                />
                <p className={styles.collection__description}>White</p>
              </li>
              <li className={styles.collection__item}>
                <img
                  src={oolongtea}
                  alt="oolong"
                  className={styles.collection__img}
                />
                <p className={styles.collection__description}>Oolong</p>
              </li>
              <li className={styles.collection__item}>
                <img
                  src={puerhtea}
                  alt="Pu-erh"
                  className={styles.collection__img}
                />
                <p className={styles.collection__description}>Pu-erh</p>
              </li>
            </ul>
          </div>
        </section>
    )
 }

 export default Collections;
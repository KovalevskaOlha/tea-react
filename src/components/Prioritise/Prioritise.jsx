import styles from "./Prioritise.module.css";
import prioritise1 from "../../assets/icons/prioritise1.svg";
import prioritise2 from "../../assets/icons/prioritise2.svg";
import prioritise3 from "../../assets/icons/prioritise3.svg";
import prioritise4 from "../../assets/icons/prioritise4.svg";

const Prioritise = () => {
    return (
        <section className={styles.priorities}>
          <div className="container">
            <h3 className={styles.priorities__title}>We Prioritise</h3>
            <ul className={styles.priorities__list}>
              <li className={styles.priorities__item}>
                <h5 className={styles.priorities__name}>Single garden teas</h5>
                <p className={styles.priorities__text}>Complete transparency</p>
                <img
                  src={prioritise1}
                  alt=""
                  className={styles.priorities__icon}
                />
              </li>
              <li className={styles.priorities__item}>
                <h5 className={styles.priorities__name}>Only Loose leaf tea</h5>
                <p className={styles.priorities__text}>Best Drinking Experience</p>
                <img
                  src={prioritise2}
                  alt=""
                  className={styles.priorities__icon}
                />
              </li>
              <li className={styles.priorities__item}>
                <h5 className={styles.priorities__name}>Customer support</h5>
                <p className={styles.priorities__text}>
                  No bots, no automated replies
                </p>
                <img
                  src={prioritise3}
                  alt=""
                  className={styles.priorities__icon}
                />
              </li>
              <li className={styles.priorities__item}>
                <h5 className={styles.priorities__name}>Fast shipping</h5>
                <p className={styles.priorities__text}>Save, Convenient, Reliable</p>
                <img
                  src={prioritise2}
                  alt=""
                  className={styles.priorities__icon}
                />
              </li>
            </ul>
          </div>
        </section>
    )
}

export default Prioritise;
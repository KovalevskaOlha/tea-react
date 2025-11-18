import styles from "./Reviews.module.css";

const Reviews = () => {
    return (
         <section className={styles.reviews}>
          <div className="container">
            <h2 className={styles.reviews__title}>What our Clients say</h2>
            <ul className={styles.reviews__list}>
              <li className={styles.reviews__item}>
                <p className={styles.reviews__text}>
                  "As a tea enthusiast, I have tried teas from all over the
                  world, but this tea store truly stands out. Their teas are of
                  the highest quality and the variety is impressive. This is
                  definitely a tea store that every tea lover should visit."
                </p>
                <p className={styles.reviews__description}>Alice</p>
              </li>
              <li className={styles.reviews__item}>
                <p className={styles.reviews__text}>
                  "This tea store is my go-to for all my tea needs. Their
                  selection is unbeatable and the quality of their teas is
                  exceptional."
                </p>
                <p className={styles.reviews__description}>Mad-Hatter</p>
              </li>
              <li className={styles.reviews__item}>
                <p className={styles.reviews__text}>
                  "If you're a tea lover, you must visit this tea store. The
                  selection is vast and the quality is outstanding. I guarantee
                  you won't be disappointed."
                </p>
                <p className={styles.reviews__description}>Dormouse</p>
              </li>
              <li className={styles.reviews__item}>
                <p className={styles.reviews__text}>
                  "I am not a big tea drinker, but this tea store has converted
                  me. I highly recommend this tea store to anyone looking for a
                  high-quality tea experience."
                </p>
                <p className={styles.reviews__description}>March Hare</p>
              </li>
            </ul>
          </div>
        </section>
    )
}

export default Reviews;

import styles from "./Blog.module.css";
import blog1 from "../../assets/images/blog1.webp";
import blog2 from "../../assets/images/blog2.webp";
import blog3 from "../../assets/images/blog3.webp";
import blog4 from "../../assets/images/blog4.webp";
import arrow from "../../assets/icons/arrow.png";

const Blog = () => {
    return (
         <section className={styles.blog}>
          <div className="container">
            <h2 className={styles.blog__title}>Our Tea Blog</h2>
            <ul className={styles.blog__list}>
              <li className={styles.blog__item}>
                <img
                  src={blog1}
                  alt=""
                  className={styles.blog__img}
                />
                <div className={styles.blog__div}>
                  <h4 className={styles.blog__smalltitle}>
                    Tea Time Travels: Funny Moments from Around the World
                  </h4>
                  <p className={styles.blog__description}>by Robinson Crusoe</p>
                  <div className={styles.read__more}>
                    <p className={styles.blog__more}>Read</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.blog__icon}
                    />
                  </div>
                </div>
              </li>
              <li className={styles.blog__item}>
                <img
                  src={blog2}
                  alt=""
                  className={styles.blog__img}
                />
                <div className={styles.blog__div}>
                  <h4 className={styles.blog__smalltitle}>
                    The Role of Tea in Mental Health
                  </h4>
                  <p className={styles.blog__description}>by Joker</p>
                  <div className={styles.read__more}>
                    <p className={styles.blog__more}>Read</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.blog__icon}
                    />
                  </div>
                </div>
              </li>
              <li className={styles.blog__item}>
                <img
                  src={blog3}
                  alt=""
                  className={styles.blog__img}
                />
                <div className={styles.blog__div}>
                  <h4 className={styles.blog__smalltitle}>
                    Tea-rific Tales: Hilarious Stories from Tea Lovers
                  </h4>
                  <p className={styles.blog__description}>
                    by Casper the Friendly Ghost
                  </p>
                  <div className={styles.read__more}>
                    <p className={styles.blog__more}>Read</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.blog__icon}
                    />
                  </div>
                </div>
              </li>
              <li className={styles.blog__item}>
                <img
                  src={blog4}
                  alt=""
                  className={styles.blog__img}
                />
                <div className={styles.blog__div}>
                  <h4 className={styles.blog__smalltitle}>
                    Tea and Caffeine: Effects on the Brain and Behavior
                  </h4>
                  <p className={styles.blog__description}>by Author Authorius</p>
                  <div className={styles.read__more}>
                    <p className={styles.blog__more}>Read</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.blog__icon}
                    />
                  </div>
                </div>
              </li>
            </ul>
            <button className={styles.blog__btn}>View all</button>
          </div>
        </section>
    )
}

export default Blog;
import logo from "./../../assets/icons/tea-logo.svg";
import buy from "./../../assets/icons/tea-buy.svg";
import person from "./../../assets/icons/tea-person.svg";
import search from "./../../assets/icons/tea-search.svg";
import burger from "../../assets/icons/burger.svg";

import styles from "./Header.module.css"; 

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header__inner}>
          <button type="button" className={styles.header__burgerBtn}>
            <img className={styles.header__burger} src={burger} alt="" />
          </button>

          <a href="/" className={styles.logo}>
            <img src={logo} alt="tea logo" />
          </a>

          <nav className={styles.header__navigation}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <a href="#" className={styles.header__link}>Black</a>
              </li>
              <li className={styles.header__item}>
                <a href="#" className={styles.header__link}>Green</a>
              </li>
              <li className={styles.header__item}>
                <a href="#" className={styles.header__link}>White</a>
              </li>
              <li className={styles.header__item}>
                <a href="#" className={styles.header__link}>Oolong</a>
              </li>
              <li className={styles.header__item}>
                <a href="#" className={styles.header__link}>Pu-erh</a>
              </li>
            </ul>
          </nav>

          <ul className={styles.header__list2}>
            <li className={styles.header__item2}>
              <a href="#" className={styles.header__actionsLink}>
                <img src={buy} alt="your buy" />
              </a>
            </li>

            <li className={styles.header__item2}>
              <a href="#" className={styles.header__actionsLink}>
                <img src={person} alt="profile" />
              </a>
            </li>

            <li
              className={`${styles.header__item2} ${styles.header__actionsLinkSearch}`}
            >
              <a href="#" className={styles.header__actionsLink}>
                <img src={search} alt="search" />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;

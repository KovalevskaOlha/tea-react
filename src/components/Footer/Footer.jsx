import styles from "./Footer.module.css";
import logo from "../../assets/icons/tea-logo.svg";
import pay1 from "../../assets/icons/pay1.svg";
import pay2 from "../../assets/icons/pay2.svg";
import pay3 from "../../assets/icons/pay3.svg";
import pay4 from "../../assets/icons/pay4.svg";
import media1 from "../../assets/icons/media1.svg";
import media2 from "../../assets/icons/media2.svg";
import media3 from "../../assets/icons/media3.svg";
import media4 from "../../assets/icons/media4.svg";
import contact1 from "../../assets/icons/contact1.svg";
import contact2 from "../../assets/icons/contact2.svg";

 const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__alldiv}>
            <div className={styles.footer__div1}>
              <h5 className={styles.footer__title1}>Products</h5>
              <ul className={styles.footer__list1}>
                <li className={styles.footer__item1}>
                  <a href="#" className={styles.footer__link1}>
                    Black tea
                  </a>
                </li>
                <li className={styles.footer__item1}>
                  <a href="#" className={styles.footer__link1}>
                    Green tea
                  </a>
                </li>
                <li className={styles.footer__item1}>
                  <a href="#" className={styles.footer__link1}>
                    White tea
                  </a>
                </li>
                <li className={styles.footer__item1}>
                  <a href="#" className={styles.footer__link1}>
                    Oolong tea
                  </a>
                </li>
                <li className={styles.footer__item1}>
                  <a href="#" className={styles.footer__link1}>
                    Pu-erh tea
                  </a>
                </li>
              </ul>
              <p className={styles.footer__description1}>© Tealuxe, 2023</p>
            </div>
            <div className={styles.footer__div2}>
              <h5 className={styles.footer__title2}>Company</h5>
              <ul className={styles.footer__list2}>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    About Us
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    Contact Us
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    Our Blog
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    FAQ
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    Shipping & Delivery
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    Refund policy
                  </a>
                </li>
                <li className={styles.footer__item2}>
                  <a href="#" className={styles.footer__link2}>
                    Terms of Service
                  </a>
                </li>
              </ul>

              <ul className={styles.footer__list2pay}>
                <li className={styles.footer__itempay}>
                  <img src={pay1} alt="" />
                </li>
                <li className={styles.footer__itempay}>
                  <img src={pay2} alt="" />
                </li>
                <li className={styles.footer__itempay}>
                  <img src={pay3} alt="" />
                </li>
                <li className={styles.footer__itempay}>
                  <img src={pay4} alt="" />
                </li>
              </ul>
            </div>
            <div className={styles.footer__div3}>
              <ul className={styles.footer__list3}>
                <li className={styles.footer__item3}>
                  <p className={styles.footer__text3}>
                    “Tea is a journey. It can take you to new places and open
                    your mind to new experiences. Let every sip transport you to
                    a world of wonder and possibility”
                  </p>
                </li>
                <li className={styles.footer__item3}>
                  <p className={styles.footer__description3}>
                    Dragomir Teodorescu, Tealuxe owner
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.footer__div4}>
              <h5 className={styles.footer__title4}>Stay In Touch</h5>
              <p className={styles.footer__text4}>
                Please feel free to contact us via the email or phone. We would
                be happy to hear from you!
              </p>

              <div className={styles.footer__div41}>
                <a href="#" className={styles.logo}>
                  <img src={logo} alt="tea logo" />
                </a>

                <ul className={styles.footer__listcontacts}>
                  <li className={styles.footer__itemcontacts}>
                    <img
                      src={contact1}
                      alt=""
                      className={styles.footer__contactsicon}
                    />
                    <a href="#" className={styles.footer__contacts}>
                      +370 680 123456
                    </a>
                  </li>

                  <li className={styles.footer__itemcontacts}>
                    <img
                      src={contact2}
                      alt=""
                      className={styles.footer__contactsicon}
                    />
                    <a href="#" className={styles.footer__contacts}>
                      info@tealuxe.com
                    </a>
                  </li>
                </ul>

                <div className={styles.footer__div5}>
              <ul className={styles.footer__list5}>
                <li className={styles.footer__item5}>
                  <img src={media1} alt="" />
                </li>
                <li className={styles.footer__item5}>
                  <img src={media2} alt="" />
                </li>
                <li className={styles.footer__item5}>
                  <img src={media3} alt="" />
                </li>
                <li className={styles.footer__item5}>
                  <img src={media4} alt="" />
                </li>
              </ul>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    )
 }

 export default Footer;
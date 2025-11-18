import styles from "./More.module.css";

const More = () => {
    return (
         <section className={styles.more}>
          <div className="container">
            <div className={styles.more__div}>
              <div className={styles.more__div1}>
                <h3 className={styles.more__title}>Want to know more?</h3>
                <p className={styles.more__text}>
                  Join our mailing list and stay up-to-date with the latest
                  news, promotions, and exclusive offers from our tea store. Be
                  the first to know about new tea arrivals, seasonal blends, and
                  special discounts. Don't miss out on the tea-rrific perks -
                  sign up today!
                </p>
              </div>
              <div className={styles.more__div4}>
                <div className={styles.more__div2}>
                  <input
                    className={styles.more__input}
                    type="text"
                    placeholder="name@email.com"
                  />
                  <button type="button" className={styles.more__btn}>Join</button>
                </div>
                <div className={styles.more__div3}>
                  <input className={styles.checkbox} id="checkbox" type="checkbox" placeholder="" />
                  <label className={styles.more__lable} htmlFor="checkbox">
                    We take your privacy seriously and are committed to
                    protecting your personal information. By subscribing to our
                    mailing list, you are consenting to receive periodic emails
                    from us about our products, promotions, and other
                    tea-related information.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default More;
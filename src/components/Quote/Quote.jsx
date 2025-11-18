import styles from "./Quote.module.css";

const Quote =  () => {
    return (
         <div className="container">
          <blockquote className={styles.quote}>
            <p className={styles.quote__text}>
              "Tea is not just a drink, it's a way of life and a way to connect
              with our loved ones."
            </p>
          </blockquote>
        </div>
    )
}

export default Quote;
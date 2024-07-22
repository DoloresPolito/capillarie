import styles from "./styles.module.scss";
import Rounded from "../../common/Rounded";

export default function GeneralSection({ texttranslations }) {
  return (
    <div className={styles.section}>
      <div className={styles.textContainer}>
        <h2>
          Leave our clinic with a <span>smile,</span> knowing your hair is in
          the<span> best hands.</span>
        </h2>
        <h5>
          Schedule your free consultation with Capillarie today and begin your
          path to exceptional hair re storation!
        </h5>
        <div className={styles.buttoncontainer}>
          <Rounded>Book an appoiment</Rounded>
        </div>
      </div>
    </div>
  );
}

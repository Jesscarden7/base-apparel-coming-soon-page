import styles from "./Main.module.css";
import iconArrow from "../../../assets/images/icon-arrow.svg";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <h1>we're</h1>
      <h1>
        Coming <br /> soon
      </h1>
      <p>
        Hello fellow shopers! We're currently building our new <br /> fashion
        store. Add your email below to stay up-to-dat with <br /> announcements
        and our launch deals.
      </p>
      <div className={styles.formContainer}>
        <input type='text' placeholder='Email Adress' />
        <div className={styles.imgContainer}>
          <img src={iconArrow} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Main;

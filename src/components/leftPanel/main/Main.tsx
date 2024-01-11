import styles from "./Main.module.css";
import iconArrow from "../../../assets/images/icon-arrow.svg";
import { useState } from "react";

function Main() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleClick = () => {
    if (email === "" || !emailRegex.test(email)) {
      setErrorMsg("Please provide a valid input");
    }
  };

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
        <input
          type='text'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errorMsg !== "") {
              setErrorMsg("");
            }
          }}
          placeholder='Email Adress'
        />
        <span className={styles.errorMsg}>{errorMsg}</span>
        <div onClick={handleClick} className={styles.imgContainer}>
          <img src={iconArrow} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Main;

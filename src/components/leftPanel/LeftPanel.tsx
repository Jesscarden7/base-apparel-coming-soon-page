import styles from "./LeftPanel.module.css";
import Header from "./header/Header";
import Main from "./main/Main";

function LeftPanel() {
  return (
    <div className={styles.leftPanelContainer}>
      <Header />
      <Main />
    </div>
  );
}

export default LeftPanel;

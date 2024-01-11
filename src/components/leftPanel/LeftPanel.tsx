import styles from "./LeftPanel.module.css";
import Main from "./main/Main";

function LeftPanel() {
  return (
    <div className={styles.leftPanelContainer}>
      <Main />
    </div>
  );
}

export default LeftPanel;

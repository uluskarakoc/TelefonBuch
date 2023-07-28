import { useState } from "react";
import styles from "./App.module.scss";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className={styles.app}>
      <Contacts />
    </div>
  );
}

export default App;

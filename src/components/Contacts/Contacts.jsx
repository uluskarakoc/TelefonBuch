import { useState, useEffect } from "react";
import List from "../List/List";
import Form from "../Form/Form";
import styles from "./contact.module.scss"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Hans",
      phone_number: "0176 2441 8967",
    },
    {
      fullname: "Yorgo",
      phone_number: "0176 7912 8967",
    },
    {
      fullname: "Frederick",
      phone_number: "0176 4109 5318",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className={styles.kontakt}>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;

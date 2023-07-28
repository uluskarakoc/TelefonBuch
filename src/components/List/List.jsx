import React, { useState } from "react";
import styles from "./list.module.scss"


function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div className={styles.list}>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullname} {contact.phone_number}
          </li>
        ))}
      </ul>
      <p> Total Kontakte ({filtered.length})</p>
    </div>
  );
}

export default List;

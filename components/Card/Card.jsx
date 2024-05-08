import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ title }) => {
  const [status, setStatus] = useState(false);
  const changeTaskStatus = () => {
    setStatus(!status);
  };
  return (
    <div
      className={`${styles.main} ${status ? styles.done : styles.inProgress}`}
      onClick={changeTaskStatus}
    >
      <h2>{title}</h2>
      {status ? <h4>Done</h4> : <h4>In Progress</h4>}
    </div>
  );
};

export default Card;

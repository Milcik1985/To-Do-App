import React from "react";
import styles from "./TaskWrapper.module.css";
import Card from "../Card/Card";

// const generatedId = () => {
//   return Math.random().toString(36).substr(2, 9);
// };

const TaskWrapper = ({ tasks, setTasks }) => {
  return (
    <div className={styles.taskWrapper}>
      {tasks.map((task, index) => (
        <Card
          key={index}
          title={task.title}
          status={task.status}
          setTasks={setTasks}
          index={index}
        />
      ))}
    </div>
  );
};

export default TaskWrapper;

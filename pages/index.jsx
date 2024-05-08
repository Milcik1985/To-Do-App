import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import TaskWrapper from "../components/TaskWrapper/TaskWrapper";

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { title: "Take a dog for a walk", status: false },
    { title: "Feed the dog", status: false },
  ]);

  // const generatedId = () => {
  //   return Math.random().toString(36).substr(2, 9);
  // };

  const insertTask = () => {
    const newTask = {
      title: task,
      status: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");

    console.log(newTask);
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.taskInput}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button className={styles.btn} onClick={insertTask}>
          Add Task
        </button>
      </div>

      <TaskWrapper tasks={tasks} />
    </div>
  );
};

export default Home;

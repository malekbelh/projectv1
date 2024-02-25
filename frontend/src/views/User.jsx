import React, { useEffect, useState } from "react";
import AddEditBoardModal from "../modals/AddEditBoardModal";

function User({boardModalOpen}) {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);
  return <div >

  </div>;
}

export default User;

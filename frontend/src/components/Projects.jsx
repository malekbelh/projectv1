import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client.js";
import { useDispatch, useSelector } from "react-redux";
import pencil from "../assets/pencil.png";
import bin from "../assets/bin.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const boards = useSelector((state) => state.boards);

  const [newProjectData, setNewProjectData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await axiosClient.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des projets :", error);
    }
  };

  const handleAddProject = async () => {
    try {
      const response = await axiosClient.post("/projects", newProjectData, {
        withCredentials: true,
      });
      console.log("Projet ajouté avec succès :", response.data);

      // Mettez à jour les projets après l'ajout
      loadProjects();

      // Mettez à jour l'utilisateur après l'ajout du projet
      const updatedUser = await axiosClient.get("/user");
      setUser(updatedUser.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet :", error);
      // Ajoutez cette ligne pour afficher l'erreur côté serveur dans la console
      console.error("Erreur serveur :", error.response.data);
    }
  };

  return (
    <div className="container mx-auto p-4  flex flex-col items-start justify-start bg-white dark:bg-slate-900  text-white">
      <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
        All boards ({boards?.length})
      </h3>

      <div className="flex gap-24  items-center  flex-wrap  px-10">
        {boards.map((board, index) => (
          <div
            className="flex w-64  h-40 flex-col  justify-between   cursor-pointer  bg-midnightblue   rounded-3xl  items-start space-x-2  py-4 px-4 "
            key={index}
            // onClick={()=>{
            //         dispatch(boardsSlice.actions.setBoardActive({index}))
            // }}
          >
            <div className="flex  items-center justify-between w-full" >
              
              <p className="text-lg  font-bold ">{board.name}</p>
              <img className="h-4" src={pencil} />
            </div>
            <div className="flex w-full  justify-end">
             
              <img className="h-4 pr-2" src={bin} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import { React, useState } from "react";
// import { Navigate, Outlet, Link } from "react-router-dom";
// import { useStateContext } from "../context/ContextProvider";
// import axiosClient from "../axios-client.js";
// import { useEffect } from "react";
// import logo2 from "../assets/logo2.png";
// import iconDown from "../assets/arrowdown.png";
// import iconUp from "../assets/arrowup.png";
// import HeaderDropdown from "./HeaderDropdown.jsx";
// import AddEditBoardModal from "../modals/AddEditBoardModal.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import AddEditTaskModal from "../modals/AddEditTaskModal.jsx";

// import boardSlices from "../redux/boardSlice";

// function AllBoards({ type }) {
//   const [boardType, setBoardType] = useState("add");
//   const boards = useSelector((state) => state.boards);
//   const board = boards.find((board) => board.isActive);
//   return (
//     <div>
//       <div className="  absolute left-40 top-14  container flex flex-col items-start mx-24 justify-start bg-white dark:bg-slate-900  text-white  w-screen h-screen py-14">
//         <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
//           All boards ({boards?.length})
//         </h3>

//         <div className="flex gap-10  items-center flex-wrap  px-10">
//           {boards.map((board, index) => (
//             <div
//               className="flex w-60  h-40  justify-center cursor-pointer  bg-midnightblue   rounded-3xl  items-center space-x-2  py-4 "
//               key={index}
//               // onClick={()=>{
//               //         dispatch(boardsSlice.actions.setBoardActive({index}))
//               // }}
//             >
//               {/* <img src={boardicon} className='h-6'/> */}
//               <p className="text-lg  font-bold ">{board.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllBoards;

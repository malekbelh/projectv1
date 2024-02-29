import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client.js";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import bin from "../assets/bin.png";
import Alert from "./Alert";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("danger");
  const [alertMessage, setAlertMessage] = useState("");
=======
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
>>>>>>> ce129374756e052c3cfba832a02aa01e2f945cbf

  const loadProjects = async () => {
    try {
      const response = await axiosClient.get("/projects", {
        headers: {
          "X-CSRF-TOKEN": axiosClient.defaults.headers.common["X-CSRF-TOKEN"],
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des projets :", error);
    }
  };

  useEffect(() => {
    const csrfToken = document.cookie.match(/XSRF-TOKEN=(.+);/)[1];
    axiosClient.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    loadProjects();
  }, []);

  const deleteProject = async (projectId) => {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible."
      )
    ) {
      try {
        await axiosClient.delete(`/projects/${projectId}`, {
          withCredentials: true,
        });
        setAlertType("success");
        setAlertMessage("Projet supprimé avec succès !");
        setShowAlert(true);
        loadProjects();
      } catch (error) {
        setAlertType("danger");
        setAlertMessage("Erreur lors de la suppression du projet.");
        setShowAlert(true);
        console.error(
          `Erreur lors de la suppression du projet : ${error.message}`
        );
      }
    }
  };

  return (
<<<<<<< HEAD
    <div className="container h-screen mx-auto pt-11 p-8 bg-white dark:bg-gray-900 text-white">
      <div className="w-80 mb-2">
        {showAlert && (
          <Alert
            type={alertType}
            message={alertMessage}
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
      <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
        Tous les projets
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="mb-4 h-56">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="p-4 flex-1 overflow-auto">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
=======
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
>>>>>>> ce129374756e052c3cfba832a02aa01e2f945cbf
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

import { React, useState } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import { useEffect } from "react";
import logo2 from "../assets/logo2.png";
import iconDown from "../assets/arrowdown.png";
import iconUp from "../assets/arrowup.png";
import HeaderDropdown from "./HeaderDropdown.jsx";
import AddEditBoardModal from "../modals/AddEditBoardModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import AddEditTaskModal from "../modals/AddEditTaskModal.jsx";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openAddEditTask, setOpenAddEditTask] = useState(false);
  const { user, token, setUser, setToken } = useStateContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const [boardType, setBoardType] = useState('add');
  const boards = useSelector((state)=>state.boards);
  const board = boards.find(board => board.isActive);
  useEffect(() => {
    if (token && user) {
      axiosClient.get("/user").then(({ data }) => {
        setUser(data);
      });
    }
  }, [token, user, setUser]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  if (!token || !user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex flex-col gap-24">
      <nav className="p-4 border border-gray-300 top-0 fixed left-0 bg-white dark:bg-gray-900 z-50 right-0">
        <div className="flex items-center justify-between">
          {/* left side  */}
          <div className="text-midnightblue flex items-center justify-between md:space-x-4">
            <div className="flex ">
              <img className="h-10" src={logo2} alt="logo" />
              <h3 className=" py-1  dark:text-gray-400 font-bold text-2xl tracking-widest hidden md:inline-block ">
                acticFlow
              </h3>
            </div>
            <div className="flex items-center">
              <h3 className="truncate max-w-[200px] md:text-xl text-l font-bold md:ml-20 font-sans  dark:text-gray-400">
                {board.name}
              </h3>

              <img
                onClick={() => setOpenDropdown((state) => !state)}
                className="w-3 mt-1 ml-2 cursor-pointer md:hidden"
                src={openDropdown ? iconUp : iconDown}
                alt="dropdownicon"
              />
            </div>
          </div>

          {/* right side  */}
          <div className="flex space-x-4 items-center md:space-x-6">
            <div className="flex space-x-4 items-center md:space-x-6">
              <button className="button hidden md:block  ">
                +Add New Task
              </button>
              <button className="button p-1 px-3 md:hidden"
              onClick={
                ()=>{
                  setOpenAddEditTask(state => !state)
                }
              }
              >+</button>
            </div>

            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  onClick={handleDropdownToggle}
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen}
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } z-50 absolute right-0 mt-60 text-base list-none bg-white divide-y rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdown-user"
              >
                <div className="px-4 py-3">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {user.name} &nbsp; &nbsp;
                  </div>
                  <div className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    {user.email}
                  </div>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit Profil
                    </a>
                  </li>
                  <li>
                    <button onClick={onLogout}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {openDropdown && (
        <HeaderDropdown
          setBoardModalOpen={setBoardModalOpen}
          setOpenDropdown={setOpenDropdown}
        />
      )}

      <Outlet />
      <div>
        {boardModalOpen && (
          <AddEditBoardModal type={boardType} setBoardModalOpen={setBoardModalOpen} />
        )}

        {
          openAddEditTask && <AddEditTaskModal device='mobile'
          setOpenAddEditTask={setOpenAddEditTask} />
        }
      </div>
    </div>
  );
};

export default DefaultLayout;

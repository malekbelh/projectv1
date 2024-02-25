import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import closeicon from "../assets/close.png";
import { useDispatch } from "react-redux";
import boardSlices from "../redux/boardSlice"
function AddEditBoardModal({ setBoardModalOpen, type }) {
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true)
  const [newColumns, setNewColumns] = useState([
    { name: "Todo", task: [], id: uuidv4() },
    { name: "Doing", task: [], id: uuidv4() },
  ]);


  const onChange = (id, newValue) => {
    setNewColumns((pervState) => {
      const newState = [...pervState];
      const column = newState.find((col) => col.id === id);
      column.name = newValue;
      return newState;
    });
  };

  const onDelete = (id) => {
    setNewColumns((pervState) => pervState.filter((el) => el.id !== id));
  };

  const validate = ()=>{
     setIsValid(false)
     if(!name.trim()){
      return false 
     }
   for (let i = 0 ;i<newColumns.length ; i++){
       if (!newColumns[i].name.trim()){
        return false
       }
   }
   setIsValid(true)
   return true ;

  }
  const onsubmit = (type)=>{
    setBoardModalOpen(false)
    if(type === 'add'){
     dispatch(boardSlices.actions.addBoard({name , newColumns}))
    }else {
     dispatch(boardSlices.actions.editBoard({name , newColumns}))
    }
  }
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setBoardModalOpen(false);
      }}
      className="
    fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 justify-center items-center flex bg-[#00000080]
      scrollbar-hide
    "
    >
      {/* Modal Section */}
      <div
        className="
        scrollbar-hide overflow-y-scroll  max-h-[95vh] bg-white dark:bg-gray-900
          text-black dark:text-white font-bold shadow-md  shadow-gray-600
          max-w-md mx-auto w-full px-8 py-8 rounded-xl "
      >
        <h3 className=" text-lg ">
          {type === "edit" ? "Edit" : "Add New"} Board
        </h3>

        {/* Task Name */}
        <div className=" mt-8 flex flex-col space-y-3">
          <label className="text-sm dark:text-white text-gray-500">
            Board Columns
          </label>
          <input
            className="bg-transparent outline-none px-4 py-2 rounded-md text-sm border  border-gray-600 focus:outline-[#635fc7]
        outline-1 ring-0
        "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="board-name-input"
          />
        </div>
        {/* Board Columns */}

        <div
          className=" 
      mt-8 flex flex-col space-y-3 
      "
        >
          <label className=" text-sm dark:text-white text-gray-500">
            Board Columns
          </label>

          {newColumns.map((column, index) => (
            <div key={index} className="flex items-center w-full">
              <input
                className="bg-transparent flex-grow px-4 py-2 rounded-md
                text-sm border border-gray-600 outline-none focus:outline-[#735fc7]
                "
                onChange={(e) => {
                  onChange(column.id, e.target.value);
                }}
                value={column.name}
                type="text"
              />
              <img
                onClick={() => {
                  onDelete(column.id);
                }}
                className="cursor-pointer m-4 h-4"
                src={closeicon}
                alt="closeicon"
              />
            </div>
          ))}
        </div>

        <div>
          <button className="w-full items-center hover:opacity-75 dark:text-midnightblue
          dark:bg-white text-white mt-2 py-2  bg-midnightblue rounded-full
          "
          onClick={()=>{
            setNewColumns((state)=>[
              ...state ,
              { name: "", task: [], id: uuidv4() },

            ])
          }}
          >
               + Add new column 
          </button>
          <button
          className="w-full items-center  hover:opacity-75 dark:text-white 
          dark: bg-midnightblue mt-8 relative text-white bg-midnightblue py-2 rounded-full

          "
          onClick={
            ()=>{
              const isValid = validate()
              if (isValid === true ) onsubmit(type)
            }
          }
          >
                {type === 'add' ? 'Create New Board': 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEditBoardModal;

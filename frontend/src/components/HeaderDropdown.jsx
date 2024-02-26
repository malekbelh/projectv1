// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import boardicon from '../assets/boardicon.png'
// import darkIcon from "../assets/111.png"
// import lightIcon from "../assets/daymode.png"
// import { Switch } from '@headlessui/react'
// import useDarkMode from '../Hooks/useDarkMode'
// import boardsSlice from '../redux/boardSlice'

// function HeaderDropdown({setOpenDropdown ,setBoardModalOpen}) {
//   const dispatch = useDispatch();
//   const [colorTheme,setTheme] =useDarkMode();
//   const [darkSide, setDarkSide] = useState(
//     colorTheme === 'light'?true :false
//   );
//   const toggleDarkMode = (checked)=>{
//     setTheme(colorTheme)
//     setDarkSide(checked)
//   }
//   const boards =useSelector((state)=>state.boards)

//   return (
//     <div onClick={
//         (e)=>{
//             if(e.target !== e.currentTarget){
//                 return
//             }setOpenDropdown(false)
//         }
//     } className='py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 dark:bg-slate-800 bg-slate-300'>
      
//       {/* dropdown modal */}
//       <div className='bg-white dark:bg-gray-900 shadow-sm shadow-[#364e7e1al] w-full py-4 rounded-xl'>
//             <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
//                 All boards ({boards?.length})
//             </h3>
//             <div>
//                {boards.map((board,index)=>(
//                 <div className={`flex cursor-pointer items-center space-x-2 px-5 py-4 ${board.isActive ? 'bg-midnightblue rounded-r-full text-white mr-8':'text-gray-600'}`}
//                 key ={index}
//                 onClick={()=>{
//                         dispatch(boardsSlice.actions.setBoardActive({index}))
//                 }}
//                 >
//                  <img src={boardicon} className='h-6'/>
//                  <p
//                  className='text-lg font-bold '>
//                     {board.name}
//                  </p>
//                 </div>
//                ))}
//                <div className='cursor-pointer flex items-baseline space-x-2 text-midnightblue
//                px-5 py-4'
               
//                onClick={()=>{
//                 setBoardModalOpen(true);
//                 setOpenDropdown(false);
//                }}
               
//                >
           
//                 <p
//                 className='text-lg font-bold'>Create new Board</p>

//                </div>
//                <div
//       className='mx-2 p-4 space-x-2 bg-slate-200 dark:bg-midnightblue flex justify-center items-center rounded-lg'
//       >
//         <img className='h-5' src={lightIcon} alt='lightmodeicon'/>
//         <Switch
//         checked={darkSide}
//         className={`${darkSide ? 'bg-gray-900':'bg-gray-200'} 
//         relative inline-flex h-6 w-11 items-center rounded-full`}
//         onChange={toggleDarkMode}
//         >
//          <span   
//          className={`${darkSide ? 'translate-x-6' : 'translate-x-1'}
//          inline-block h-4 w-4 transform rounded-full bg-white transition`}
//          />
//         </Switch>
//         <img className='h-4' src={darkIcon} alt='lightmodeicon'/>

//       </div>
//             </div>
//       </div>
    

//     </div>
//   )
// }

// export default HeaderDropdown







import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardicon from "../assets/boardicon.png";
import darkIcon from "../assets/111.png";
import lightIcon from "../assets/daymode.png";
import { Switch } from "@headlessui/react";
import useDarkMode from "../Hooks/useDarkMode";

function HeaderDropdown({ setOpenDropdown, setBoardModalOpen }) {
  const dispatch = useDispatch();
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  const boards = useSelector((state) => state.boards);

  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenDropdown(false);
      }}
    >
      <div className=" shadow-sm shadow-[#364e7e1al] rounded-xl">
        <div>
          <div className="mx-2 p-4 space-x-2  flex justify-center items-center rounded-lg">
            <img className="h-5" src={lightIcon} alt="lightmodeicon" />
            <Switch
              checked={darkSide}
              className={`${darkSide ? "bg-gray-900" : "bg-gray-200"} 
        relative inline-flex h-6 w-11 items-center rounded-full`}
              onChange={toggleDarkMode}
            >
              <span
                className={`${darkSide ? "translate-x-6" : "translate-x-1"}
         inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <img className="h-4" src={darkIcon} alt="lightmodeicon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDropdown;
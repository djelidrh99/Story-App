import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// icon import
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaScroll } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { useModal, useSetModal } from "../../Context/ModalContext";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";


// @ts-ignore
import myImg from"../../../public/img/rh.jpg";
// @ts-ignore
import dash from "../../../public/img/dashboard.jpg";
import SwiperModal from "./SwiperModal";


// import required modules

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const modal = useModal();

  const linkListWeb = [
    {
      link: "Home",
      icon:  <FaHome className="sm:w-6 sm:h-6" />,
      path: "",
    },
    {
      link: "Search",
      icon: <FaSearch className="sm:w-6 sm:h-6" />,
      path: "search",
    },
    {
      link: "Explore",
      icon: <FaCompass className="sm:w-6 sm:h-6" />,
      path: "explore",
    },
    {
      link: "Reels",
      icon: <FaScroll className="sm:w-6 sm:h-6" />,
      path: "reels",
    },
    {
      link: "Messages",
      icon: <FaLocationArrow className="sm:w-6 sm:h-6" />,
      path: "messages",
    },
    {
      link: "Notifications",
      icon: <IoNotifications className="sm:w-6 sm:h-6" />,
      path: "notifications",
    },
    {
      link: "Create",
      icon: <MdCreateNewFolder className="sm:w-6 sm:h-6" />,
      path: "create",
    },
  ];

  const linkListMobile = [
    {
      link: "Home",
      icon:  <FaHome className="w-[20px] h-[20px]" />,
      path: "",
    },
   
    {
      link: "Explore",
      icon: <FaCompass className="w-[20px] h-[20px]" />,
      path: "explore",
    },
    {
      link: "Reels",
      icon: <FaScroll className="w-[20px] h-[20px]" />,
      path: "reels",
    },
  
    {
      link: "Notifications",
      icon: <IoNotifications className="w-[20px] h-[20px]" />,
      path: "notifications",
    },
    {
      link: "Create",
      icon: <MdCreateNewFolder className="w-[20px] h-[20px]" />,
      path: "create",
    },
  ];


  return (
    <div className="flex sm:flex-row flex-col-reverse  px-0 sm:px-2  min-h-screen relative">
      <div className=" shadow-xl flex items-center flex-row sm:flex-col sm:border-r border-gray-200 sm:px-3 ">
        <div className="font-bold text-2xl hidden lg:block text-center py-5">
          Story<span className="text-purple-800">App</span>
        </div>
        <div className="font-bold text-2xl hidden sm:flex lg:hidden justify-center items-center py-5">
          <MdOutlineLinkedCamera
            style={{ fontSize: "24px", lineHeight: "34px", fontWeight: "bold" }}
          />
        </div>
        {/* web sideBar */}
        <ul className="hidden sm:flex flex-row sm:flex-col max-sm:border-t border-gray-200 max-sm:shadow-xl fixed bottom-0  sm:static w-full sm:gap-2">
          {linkListWeb.map((item, index) => {
            
            return (
              <li
                key={index}
                style={
                  location.pathname === `/Dashboard/${item.path}` ||
                  (location.pathname === `/Dashboard` && item.path === "")
                    ? { fontWeight: "bold" }
                    : null
                }
                className="px-2   sm:px-4 max-sm:flex max-sm:justify-center max-sm:items-center py-2 flex-grow cursor-pointer rounded-sm flex items-center sm:mb-2 hover:bg-slate-300 transition-all "
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.icon}
                <span className="sm:ml-5 hidden lg:block text-lg">
                  {item.link}
                </span>
              </li>
            );
          })}
        </ul>
         {/* mobile sideBar */}
        <ul className="flex sm:hidden flex-row sm:flex-col max-sm:border-t border-gray-200 max-sm:shadow-xl fixed bottom-0  sm:static w-full sm:gap-2">
          {linkListMobile.map((item, index) => {
            
            return (
              <li
                key={index}
                style={
                  location.pathname === `/Dashboard/${item.path}` ||
                  (location.pathname === `/Dashboard` && item.path === "")
                    ? { fontWeight: "bold" }
                    : null
                }
                className="px-2   sm:px-4 max-sm:flex max-sm:justify-center max-sm:items-center py-2 flex-grow cursor-pointer rounded-sm flex items-center sm:mb-2 hover:bg-slate-300 transition-all "
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.icon}
                <span className="sm:ml-5 hidden lg:block text-lg">
                  {item.link}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="flex-grow"></div>
        <div
        className=    "hidden sm:flex flex-row sm:flex-col max-sm:border-t border-gray-200 max-sm:shadow-xl fixed bottom-0  sm:static w-full sm:gap-2"
         onClick={() => {
          navigate("/");
          localStorage.removeItem("token")
        }}
        >
          <div
                          className="px-2   sm:px-4 max-sm:flex max-sm:justify-center max-sm:items-center py-2 flex-grow cursor-pointer rounded-sm flex items-center sm:mb-2 hover:bg-slate-300 transition-all "
          >
          <RiLogoutCircleRLine className="sm:w-6 sm:h-6" />
        <span className="sm:ml-5 hidden lg:block text-lg">
                  Logout
                </span>

          </div>
        
        </div>

      </div>
      <div className="flex-grow flex overflow-hidden mt-[45px]  sm:mt-0 px-4 py-2 ">
        <Outlet />
      </div>
      <div className="px-4 z-40 bg-white w-full fixed top-0 flex items-center border-b  gap-2 shadow-sm sm:hidden border-gray-200">
      <div className="font-bold text-lg   py-2">
          Story<span className="text-purple-800">App</span>
      </div>
      <div className="flex-grow"></div>
      <div className="w-36 flex-grow flex-shrink-0">
        <input className="px-2 w-full py-1 outline-none border rounded-md border-gray-200 bg-gray-200 focus:bg-white placeholder:text-gray-800 " type="text" placeholder="Search" name="" id="" />
      </div>
      <div className="cursor-pointer px-2">
      <FaLocationArrow onClick={()=>navigate("messages")} className="w-[20px] h-[20px]" />
      </div>

      </div>
      {modal && <SwiperModal />}
    </div>
  );
}

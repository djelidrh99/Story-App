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

  const linkList = [
    {
      link: "Home",
      icon: <FaHome className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "",
    },
    {
      link: "Search",
      icon: <FaSearch className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "search",
    },
    {
      link: "Explore",
      icon: <FaCompass className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "explore",
    },
    {
      link: "Reels",
      icon: <FaScroll className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "reels",
    },
    {
      link: "Messages",
      icon: <FaLocationArrow className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "messages",
    },
    {
      link: "Notifications",
      icon: <IoNotifications className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "notifications",
    },
    {
      link: "Create",
      icon: <MdCreateNewFolder className="w-5 h-4 sm:w-6 sm:h-6" />,
      path: "create",
    },
  ];

  const stories = [myImg, dash];

  return (
    <div className="flex sm:flex-row flex-col-reverse  px-0 sm:px-2  min-h-screen relative">
      <div className=" shadow-xl sm:border-r border-gray-200 sm:px-3 ">
        <div className="font-bold text-2xl hidden lg:block text-center py-5">
          App<span className="text-purple-800">Story</span>
        </div>
        <div className="font-bold text-2xl hidden sm:flex lg:hidden justify-center items-center py-5">
          <MdOutlineLinkedCamera
            style={{ fontSize: "24px", lineHeight: "34px", fontWeight: "bold" }}
          />
        </div>
        <ul className="flex flex-row sm:flex-col max-sm:border-t border-gray-200 max-sm:shadow-xl fixed bottom-0  sm:static w-full sm:gap-2">
          {linkList.map((item, index) => {
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
                {item.icon}{" "}
                <span className="sm:ml-5 hidden lg:block text-lg">
                  {item.link}
                </span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-grow overflow-hidden px-4 py-2 ">
        <Outlet />
      </div>
      {modal && <SwiperModal />}
    </div>
  );
}

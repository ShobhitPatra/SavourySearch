import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
};

const DesktopSideBar = () => {
  return (
    <>
      <div className="w-24 md:w-64 min-h-screen border-r px-3 md:px-8 bg-slate-100 hidden sm:block">
        <div className="flex flex-col  left-0 sticky ">
          <div className="flex justify-start items-center w-full">
            <img src="/logo.webp"></img>
          </div>
          <div className="flex flex-col gap-6 items-center md:items-start">
            <Link to={"/"} className="flex">
              <Home size={24}></Home>
              <div className="font-bold px-1 md:px-2 hidden md:block ">
                Home
              </div>
            </Link>
            <Link to={"/favourites"} className="flex">
              <Heart size={24} />
              <div className="font-bold px-1 md:px-2 hidden md:block ">
                Favourites
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileSideBar = () => {
  return (
    <>
      <div
        className="flex gap-4 p-2 bottom-0 fixed
      bg-slate-200 w-full left-0 justify-center sm:hidden"
      >
        <Link to={"/"}>
          <Home size={24}></Home>
        </Link>
        <Link to={"/favourites"}>
          <Heart size={24} />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;

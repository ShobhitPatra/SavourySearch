import React from "react";
import Sidebar from "../components/Sidebar";
import RecipieCard from "../components/RecipieCard";
import { Search } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="search-bar flex w-96 md:w-full md:px-14">
          <input
            type="text"
            placeholder="search for your favourite recipie "
            className="bg-slate-200 m-2 h-8 w-full p-2 rounded-md md:h-12 md:text-lg"
          />
          <button className="flex justify-center items-center cursor-pointer bg-blue-700 rounded-md w-16 m-2">
            <Search size={18} color="white" />
          </button>
        </div>
        <div className="flex flex-col items-start w-96 md:w-full md:px-14">
          <div className="heading p-2 text-3xl text-slate-800 font-extrabold md:text-5xl font-serif">
            Recommended Recipies
          </div>
          <div className="sub-heading text-lg p-2 text-slate-400 font-semibold md:text-2xl ">
            Lorem ipsum dolor sit.
          </div>
        </div>

        <div className="flex flex-wrap overflow-auto justify-center">
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;

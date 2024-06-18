import { Heart } from "lucide-react";
import React from "react";

const RecipieCard = () => {
  return (
    <>
      <div className="recipie-container rounded-lg bg-green-300 m-3 w-96 flex flex-col md:m-5">
        <div className="image">
          <img src="./logo.webp" className="w-screen h-36 "></img>
          <div className="favourite-option">
            <Heart size={24} />
          </div>
        </div>
        <div className="title font-extrabold text-3xl text-slate-900 pt-2 px-2">
          Chicken Tikka Masala
        </div>
        <div className="description font-semibold text-lg text-slate-500 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
    </>
  );
};

export default RecipieCard;

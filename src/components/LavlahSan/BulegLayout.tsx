import React from "react";

function BulegLayout() {
    return (
      <div className="flex items-center">
      <div className="flex">
    <a href='#' className="mr-2 ml-10 hover:text-pink-500 hover:underline">Жагсаалт</a>
    <p className="mr-2">/</p>
    <a href='#' className="mr-2 hover:text-pink-500 hover:underline">Хогийн сав</a>
  </div>
      <div className="ml-auto mr-10 ">
        <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mt-1">
          Бүлэг нэмэх
        </button>
      </div>
    </div>
     
       
    );
  }
  export default BulegLayout;
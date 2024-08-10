"use client";
import React from "react";

export default function Skills() {
  return (
    <div className="border  p-2">
     <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold ">Skills</h1>
      <hr className="w-[20%] border-t-4 mt-2 border-[#61D2B4] " />
     </div>
    <div className="flex flex-col justify-center items-center p-4 mt-4">
   <div className="w-[90%]">
   <div className=" flex justify-between flex-wrap flex-shrink-0 gap-4">
     <div className=" p-2">
         <img src="Assets/Images/reacticon.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
         <img src="Assets/Images/mongodbicon.svg" className="w-[100px] border rounded-full p-2  h-[100px] " alt="" />
     </div>
     <div className="">
         <img src="Assets/Images/nodejsicon.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
         <img src="Assets/Images/tailwind.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
        <img src="Assets/Images/typscripticon.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
        <img src="Assets/Images/jsicon.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div>
        <img src="Assets/Images/htmlicon.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
        <img src="Assets/Images/css.svg" className="w-[100px] h-[100px]  border rounded-full p-2  " alt="" />
     </div>
     <div className="">
        <img src="Assets/Images/expressicon.svg" className="w-[100px] h-[100px]  border rounded-full p-2 " alt="" />
     </div>
     </div>
   </div>
    </div>
    </div>
  );
}

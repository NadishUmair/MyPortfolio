"use client";
import React from "react";
import './skills.css'; // Import the CSS file

export default function Skills() {
  return (
    <div className=" p-2 h-[90vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold">Skills</h1>
        <hr className="w-[20%] border-t-4 mt-2 border-[#61D2B4]" />
      </div>
      <div className="flex flex-col  justify-center items-center p-4 mt-4 h-[80%] ">
        <div className="skills-container w-[90%] h-full">
          <div className=" gap-[1rem] relative flex justify-between flex-wrap h-full">
            <div className=" p-2 md:absolute top-2 left-0 float1">
              <img
                src="Assets/Images/reacticon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="React"
              />
            </div>
            <div className=" md:absolute p-2 top-[5%] left-[20%] float2">
              <img
                src="Assets/Images/mongodbicon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="MongoDB"
              />
            </div>
            <div className=" md:absolute p-2 left-[30%] top-[40%] float2">
              <img
                src="Assets/Images/nodejsicon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="Node.js"
              />
            </div>
            <div className="md:absolute p-2 left-[60%] top-[10%] float1">
              <img
                src="Assets/Images/tailwind.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="Tailwind CSS"
              />
            </div>
            <div className="md:absolute p-2 right-0 top-0 float2">
              <img
                src="Assets/Images/typscripticon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="TypeScript"
              />
            </div>
            <div className=" md:absolute p-2 bottom-0 float1">
              <img
                src="Assets/Images/jsicon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="JavaScript"
              />
            </div>
            <div className=" md:absolute p-2  bottom-0 right-[20%] float1">
              <img
                src="Assets/Images/htmlicon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="HTML"
              />
            </div>
            <div className=" md:absolute p-2 bottom-0 right-0 float2">
              <img
                src="Assets/Images/css.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="CSS"
              />
            </div>
            <div className="md:absolute p-2 bottom-[0%] left-[50%] float1">
              <img
                src="Assets/Images/expressicon.svg"
                className="w-[100px] h-[100px] border border-gray-300 rounded-full p-2"
                alt="Express.js"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

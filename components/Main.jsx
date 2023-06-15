import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            LET'S BUILD SOMETHING TOGETHER
            <h1>
              Hi, I'm <span className="text-[#5651e5]"> Loris </span>{" "}
            </h1>
            <h1 className="py-2">A Business Informatics Student</h1>
            <p className="py-4 max-w-[70%] m-auto">
              I'm a business informatics student that is currently in his 4th
              year. my plan is to get my matura from my current school and then
              go to the technical university in vienna to study informatics
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

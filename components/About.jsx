import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            I spent the first 8 years of my life living in Vienna. After we
            moved to Vorarlberg, I was outside a lot. That changed when i got my
            first computer. At first I was just playing video games but then i
            quickly found interest in other things i could do with my computer.
            So i started programming a little. I started with HTML & CSS to make
            fun little projects.
          </p>

          <p classNam="py2">
            After I knew i wanted to pursue in something of that nature I went
            to HTL Dornbirn to study business informatics. First we learned C++
            and soon a lot of other things like SQL, HTML & CSS, PHP, C# and
            more. And now I'm about to have my first big project with 2
            classmates for a real company.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#212129] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

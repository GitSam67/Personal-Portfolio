import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col w-full mb-3 mt-20">
        <h1 className="mx-auto inline-block w-10"><i class="fa-solid fa-2x fa-user text-indigo-500"></i></h1>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-center text-white">
            About <span className="text-indigo-500"> Me</span>
          </h1>
      </div>
      <div className="container mx-auto flex px-10 pt-10 pb-20 md:flex-row flex-col items-center">
      <div className="flex flex-row justify-center items-center lg:max-w-lg lg:w-full mr-20 md:w-1/2 w-5/6">
        <div id="herobox" className="flex flex-row justify-center items-center m-0 p-0 border-2 rounded-full">
          <img
            className="object-cover object-center m-0 rounded-full"
            alt="hero"
            src="./hero.jpeg"
          />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl mb-1 text-2xl font-medium text-white">
          I'm Samanuay Nambiar
          </h1>
            <h3 className="ml-1 font-medium mb-3 text-white"> Full Stack Web Developer..!!</h3>
            <br className="hidden lg:inline-block" />
          <p className="mb-8 leading-relaxed">
          I am a Full-Stack developer based in Baroda, India. I am currently pursuing my BTech in Computer Science from Parul University, Vadodara. I am very passionate about improving my coding skills & builiding out Web-based applications. Exploring various domains to honor my skillset..
          <br />
          <span className="text-white mr-3"><span className="text-indigo-400">Email</span>  : samanuaynr67@gmail.com </span>

          <span className="text-white "><span className="text-indigo-400">Phone</span>  : +91 9375829419 </span>
          <br />
          <span className="text-white mr-8"><span className="text-indigo-400">Place</span>  : Vadodara, India - 390021 </span>

          <span className="text-white "><span className="text-indigo-400">Age</span> : 20</span>

          </p>
          <div className="flex justify-center items-center">
            <a
              href="#about"
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
              Resume
              <i class="fas fa-sm fa-chevron-right mt-4 ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
    return (
        <section id="footer" className="bg-black">
            <div className="container px-5 py-5 mx-auto mt-10">
                <div className="grid grid-cols-3">
                <div className="items-center text-center mx-auto">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Sam's Portfolio</h2>
                    <p className="text-center">Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Exploring 🚀. . .</p>
                </div>

                <div className="items-center mx-auto pr-10">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Quick links</h2>
                    <div id="quick" className="flex flex-col text-left">
                    <a className="transition delay-40 title-font font-medium text-white hover:text-indigo-500 duration-500" href="#starter"><i class="fas fa-chevron-circle-right"></i> home</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-indigo-500 duration-500" href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-indigo-500 duration-500" href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-indigo-500 duration-500" href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-indigo-500 duration-500" href="#projects"><i class="fas fa-chevron-circle-right"></i> projects</a>
                    <a className="transition delay-40 title-font font-medium text-white py-1 hover:text-indigo-500 duration-500" href="#contact"><i class="fas fa-chevron-circle-right"></i> contact</a>
                    </div>
                </div>

                <div class="items-center">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Contact info</h2>
                    <p className="py-1"> <i class="fas fa-phone text-indigo-500"></i>  +91 937-582-9419</p>
                    <p className="py-1"> <i class="fas fa-envelope text-indigo-500"></i>  samanuaynr67@gmail.com</p>
                    <p className="py-1"> <i class="fas fa-map-marked-alt text-indigo-500"></i>  Vadodara, India-390021</p>
                    
                    <div id="social" class="flex flex-wrap">
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-indigo-500 duration-500" href="https://www.linkedin.com/in/samanuay-nambiar-31852b233/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-indigo-500 duration-500" href="https://github.com/GitSam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-indigo-500 duration-500" href="mailto:samanuaynr67@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-indigo-500 duration-500" href="https://twitter.com/SamanuayN" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i> </a>
                    <a className="transition delay-40 rounded-xl h-4 w-4 text-center m-4 mt-2 ml-0 text-white hover:text-indigo-500 duration-500" href="https://dev.to/devsam67" target="_blank" rel="noopener noreferrer"><i class="fab fa-dev"></i> </a>
                    </div>
                </div>
                </div>
            </div>

            <h1 class="w-10/12 mx-auto py-2 text-center title-font font-medium border-t-2 border-gray-600">Designed with <i class="fas fa-heart pulse text-red-700"></i> by <a href="https://www.linkedin.com"> Samanuay</a></h1>

        </section>

    )
}
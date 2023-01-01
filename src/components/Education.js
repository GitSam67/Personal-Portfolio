import React from "react";
import { education } from "../data";

export default function Education() {
    return (
        <section id="education">

            <div className="container px-5 py-10 mx-auto text-center">
                <div className="text-center mb-10">
                    <i class="fas fa-2x fa-graduation-cap inline-block w-10 text-indigo-500" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Place where foundation stone of my knowledge got incubated...!!
                    </p>
                </div>

                <div className="flex flex-col m-4">
                    {education && education.map((edu) => (
                        <div id="edubox" className="p-4 w-3/4 h-48 mx-auto">
                            <div className="transition ease-in-out delay-50 shadow inline-flex w-full h-full bg-white p-2 rounded hover:bg-gray-100 duration-500">
                                <img
                                    className="w-48 h-full object-left object-cover"
                                    src={edu.image}
                                    alt="education"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font text-left text-indigo-900 font-medium text-white text-2xl mt-2 ml-3">
                                        {edu.title}
                                    </span>
                                    <span className="text-left text-gray-800 text-md uppercase m-3">
                                        {edu.desc}
                                    </span>
                                    <span className="text-lg text-pink-500 text-left font-medium m-3">
                                        {edu.status}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import React from "react";
import experienceData from "../Json/Data.json";

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto mt-8 mb-8">
      <div className="flex justify-center m-5">
        <h2 className="text-3xl font-bold leading-tight text-slate-600 sm:text-4xl lg:text-5xl">
          Experience
        </h2>
      </div>
      <div className="border-l-2 border-blue-500 pl-8">
        {experienceData.experience.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between mt-8"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">{exp["Company-Name"]}</h3>
              <p className="text-gray-600 text-sm">
                Time Period: {exp["Time-Period"]}
              </p>
              <p className="text-gray-600 text-sm">
                Technologies: {exp["Technologies"].join(", ")}
              </p>

              <p className="text-gray-700">{exp["Description"]}</p>
            </div>
            <p className="text-gray-600 text-sm">{exp["Designation"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
